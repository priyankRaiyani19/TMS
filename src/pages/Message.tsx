import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import {
    Send2,
    Call,
    Video,
    SearchNormal,
    AttachCircle,
    CloseCircle,
    ArrowLeft,

} from "iconsax-react";
import Navbar from "../components/common/Navbar.tsx";
import usersData from "../data/message/users.json";
import messagesData from "../data/message/messages.json";
import DoubleTick from "../components/message/DoubleTick.tsx";

interface User {
    name: string;
    message: string;
    time: string;
    unread: boolean;
    avatar: string;
    isOnline: boolean;
}

interface Message {
    text: string;
    sender: string;
    time: string;
    read?: boolean;
    isImage?: boolean;
    image?: string;
}

interface Messages {
    [key: string]: Message[];
}

export default function ChatApp() {
    const [selectedUser, setSelectedUser] = useState<User>(usersData.users[0]);
    const [messages, setMessages] = useState<Messages>(messagesData.messages);
    const [input, setInput] = useState("");
    const chatRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [showSidebar, setShowSidebar] = useState(true);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const getLastMessagePreview = (userName: string) => {
        const userMessages = messages[userName] || [];
        if (userMessages.length === 0) return "";

        const lastMessage = userMessages[userMessages.length - 1];
        const prefix = lastMessage.sender === "me" ? "You: " : "";
        const text = lastMessage.text;
        return `${prefix}${
            text.length > 25 ? text.substring(0, 25) + "..." : text
        }`;
    };
    const getLastMessageTime = (userName: string) => {
        const userMessages = messages[userName] || [];
        if (userMessages.length === 0) return "";

        const lastMessage = userMessages[userMessages.length - 1];
        return lastMessage.time.replace("Today ", "");
    };

    const isLastMessageRead = (userName: string) => {
        const userMessages = messages[userName] || [];
        if (userMessages.length === 0) return false;

        const lastMessage = userMessages[userMessages.length - 1];
        const user = usersData.users.find((u) => u.name === userName);
        return (
            lastMessage.sender === "me" && lastMessage.read && user?.isOnline === true
        );
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file");
            return;
        }

        const imageUrl = URL.createObjectURL(file);
        setImagePreview(imageUrl);
        setImageFile(file);
    };

    const sendMessage = () => {
        if (!input.trim() && !imageFile) return;

        const newMessage = {
            text: input.trim(),
            sender: "me",
            time: `Today ${new Date().getHours()}:${String(
                new Date().getMinutes()
            ).padStart(2, "0")}`,
            read: true,
        };

        if (imageFile) {
            const imageUrl = URL.createObjectURL(imageFile);
            Object.assign(newMessage, {
                isImage: true,
                image: imageUrl,
            });
        }

        setMessages((prev) => ({
            ...prev,
            [selectedUser.name]: [...(prev[selectedUser.name] || []), newMessage],
        }));

        setInput("");
        setImagePreview(null);
        setImageFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages[selectedUser.name]]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col  min-h-[63rem]">
            {/* Navbar*/}
            <div
                className={`navbar-container ${!showSidebar ? "md:block hidden" : ""}`}
            >
                <Navbar name={"Message"} isActive={false} />
            </div>

            <div className="flex flex-1 bg-gray-50 relative">
                {/*sidebar*/}
                <div
                    className={`w-full md:w-1/4 bg-white absolute md:relative h-full z-10 transition-transform duration-300 ease-in-out ${
                        showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    }`}
                >
                    {/* Search bar */}
                    <div className="p-4 ">
                        <div className="flex items-center bg-gray-50 rounded-lg p-[0.85rem]">
                            <input
                                type="text"
                                placeholder="Search Name"
                                className="bg-transparent outline-none w-full text-sm"
                            />
                            <SearchNormal size="20" color="#54577a" />
                        </div>
                    </div>

                    {/* User list */}
                    <div className="overflow-y-auto h-[calc(100vh-10px)] md:h-[calc(64rem-140px)]">
                        {usersData.users.map((user, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-4 cursor-pointer ${
                                    selectedUser.name === user.name
                                        ? "bg-[#FAFAFA]"
                                        : "hover:bg-gray-50"
                                }`}
                                onClick={() => {
                                    setSelectedUser(user);
                                    setShowSidebar(false);
                                }}
                            >
                                <div className="relative">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        onError={(e: SyntheticEvent<HTMLImageElement>) => {
                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${user.name.replace(
                                                " ",
                                                "+"
                                            )}&background=random`;
                                        }}
                                    />
                                </div>
                                <div className="ml-3 flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-medium text-sm">{user.name}</h3>
                                        <div className="flex flex-col items-end">
                      <span className="text-xs text-gray-500">
                        {user.name === selectedUser.name &&
                        user.time === "active"
                            ? "active"
                            : getLastMessageTime(user.name)}
                      </span>
                                            {!user.isOnline && (
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p
                                            className={`text-xs ${
                                                user.unread ? "text-gray-800" : "text-gray-500"
                                            } truncate flex-1`}
                                        >
                                            {getLastMessagePreview(user.name)}
                                        </p>
                                        {getLastMessagePreview(user.name).startsWith("You:") &&
                                            user.isOnline && (
                                                <DoubleTick isRead={!!isLastMessageRead(user.name)} />
                                            )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main chat Container */}
                <div className="flex-1 flex flex-col w-full h-100vh md:h-[calc(64rem-50px)]">
                    {/* Chat header*/}
                    <div className="flex items-center justify-between p-4 bg-white">
                        <div className="flex items-center">
                            <button
                                onClick={() => setShowSidebar(true)}
                                className="md:hidden mr-3"
                            >
                                <ArrowLeft size="20" color="#000" />
                            </button>
                            <img
                                src={selectedUser.avatar}
                                alt={selectedUser.name}
                                className="w-10 h-10 rounded-full object-cover"
                                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${selectedUser.name.replace(
                                        " ",
                                        "+"
                                    )}&background=random`;
                                }}
                            />
                            <div className="ml-3">
                                <h2 className="font-medium">{selectedUser.name}</h2>
                                <p className="text-xs text-green-500">• Online</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                className={`h-[3rem] w-[3rem] flex justify-center items-center rounded-full border-2 border-secondary-100`}
                            >
                                <Video size="20" color="#54577a" />
                            </button>
                            <button
                                className={`h-[3rem] w-[3rem] flex justify-center items-center rounded-full border-2 border-secondary-100`}
                            >
                                <Call size="20" color="#54577a" />
                            </button>
                        </div>
                    </div>

                    {/*container*/}
                    <div className="flex-1 overflow-y-auto" ref={chatRef}>
                        <div className="p-4">
                            <div className="flex justify-center mb-4">
                <span className="bg-black text-white text-xs px-[0.75rem] py-[0.5rem] rounded-[0.625rem]">
                  Today
                </span>
                            </div>
                            {(messages[selectedUser.name] || []).map((msg, index: number) => (
                                <div
                                    key={index}
                                    className={`flex ${
                                        msg.sender === "me" ? "justify-end" : "justify-start"
                                    } mb-4`}
                                >
                                    {/*{msg.sender !== "me" && (*/}
                                    {/*    <img*/}
                                    {/*        src={selectedUser.avatar}*/}
                                    {/*        alt={selectedUser.name}*/}
                                    {/*        className="w-8 h-8 rounded-full mr-2 self-end"*/}
                                    {/*        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {*/}
                                    {/*            e.currentTarget.src = `https://ui-avatars.com/api/?name=${selectedUser.name.replace(' ', '+')}&background=random`;*/}
                                    {/*        }}*/}
                                    {/*    />*/}
                                    {/*)}*/}

                                    <div className="max-w-[80%] md:max-w-xs ">
                                        {msg.isImage && (
                                            <div
                                                className={`mb-1  p-2 rounded-lg overflow-hidden ${
                                                    msg.sender === "me" ? "bg-primary-500" : "bg-gray-100"
                                                }`}
                                            >
                                                <img
                                                    src={msg.image}
                                                    alt="Dashboard screenshot"
                                                    className="w-full"
                                                    onError={(
                                                        e: React.SyntheticEvent<HTMLImageElement>
                                                    ) => {
                                                        e.currentTarget.src = "/api/placeholder/400/300";
                                                    }}
                                                />
                                                <div
                                                    className={`p-2  ${
                                                        msg.sender === "me" ? "text-white" : "text-gray-800"
                                                    }`}
                                                >
                                                    {msg.text}
                                                </div>
                                            </div>
                                        )}

                                        {!msg.isImage && (
                                            <div
                                                className={`p-3 rounded-b-lg  rounded-l-lg max-w-[21.25rem] ${
                                                    msg.sender === "me"
                                                        ? "bg-primary-500 text-white rounded-br-none"
                                                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                                                }`}
                                            >
                                                {msg.text}
                                            </div>
                                        )}

                                        <div
                                            className={`text-xs mt-1 ${
                                                msg.sender === "me" ? "text-right" : "text-left"
                                            } text-gray-500 flex items-center ${
                                                msg.sender === "me" ? "justify-end" : "justify-start"
                                            }`}
                                        >
                                            {msg.time}
                                            {msg.sender === "me" &&
                                                msg.read &&
                                                selectedUser.isOnline && <DoubleTick isRead={true} />}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Input field*/}
                    <div className="bg-white p-3 flex items-center ">
                        {imagePreview && (
                            <div className="mb-2 relative">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="max-h-32 rounded-lg"
                                />
                                <button
                                    onClick={() => {
                                        setImagePreview(null);
                                        setImageFile(null);
                                        if (fileInputRef.current) {
                                            fileInputRef.current.value = "";
                                        }
                                    }}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                >
                                    <CloseCircle size={16} color="#fff" variant="Bold" />
                                </button>
                            </div>
                        )}
                        <div className="flex items-center w-full">
                            <input
                                type="text"
                                placeholder="Send your message..."
                                className="flex-1 rounded-full px-4 py-2 outline-none text-sm"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <div>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleFileUpload}
                                />
                                <button
                                    className="text-white p-2 rounded-[0.625rem] ml-2"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    <AttachCircle size="18" color="#54577a" variant="Outline" />
                                </button>

                                <button
                                    className="bg-primary-500 text-white p-2 rounded-[0.625rem] ml-2"
                                    onClick={sendMessage}
                                >
                                    <Send2 size="18" variant="Bold" color="#fff" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
