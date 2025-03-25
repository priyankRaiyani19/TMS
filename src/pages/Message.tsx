import {useState, useEffect, useRef} from "react";
import {Send2, Call, Video, SearchNormal, AttachCircle} from "iconsax-react";
import Navbar from "../components/common/Navbar.tsx";

const users = [
    {
        name: "Angel Prison",
        message: "Thank you very much. I'm glad ...",
        time: "active",
        unread: true,
        avatar: "/avatars/angelie.jpg"
    },
    {
        name: "Jakob Saris",
        message: "You: Sure! let me tell you about w...",
        time: "2 m ago",
        unread: false,
        avatar: "/avatars/jakob.jpg"
    },
    {
        name: "Emery Korsgard",
        message: "There's. You are very helpful...",
        time: "3 m ago",
        unread: true,
        avatar: "/avatars/emery.jpg"
    },
    {
        name: "Jeremy Zucker",
        message: "You: Sure! let me teach you about...",
        time: "4 m ago",
        unread: false,
        avatar: "/avatars/jeremy.jpg"
    },
    {
        name: "Nadia Lauren",
        message: "Is there anything I can help? Just...",
        time: "5 m ago",
        unread: true,
        avatar: "/avatars/nadia.jpg"
    },
    {
        name: "Jason Statham",
        message: "You: Sure! let me share about...",
        time: "6 m ago",
        unread: false,
        avatar: "/avatars/jason.jpg"
    },
    {
        name: "Angel Kimberly",
        message: "Okay, I know very well about it...",
        time: "7 m ago",
        unread: true,
        avatar: "/avatars/angel.jpg"
    },
    {
        name: "Jason Momoa",
        message: "You: Sure! let me tell you about...",
        time: "7 m ago",
        unread: false,
        avatar: "/avatars/jasonm.jpg"
    },
];

// Double tick SVG component


export default function ChatApp() {
    const [selectedUser, setSelectedUser] = useState(users[0]);
    const [messages, setMessages] = useState({
        "Angelie Crison": [
            {
                text: "Morning Angelie, I have question about My Task",
                sender: "me",
                time: "Today 11:52",
                read: true
            },
            {
                text: "Yes sure. Any problem with your assignment?",
                sender: "them",
                time: "Today 11:53"
            },
            {
                text: "How to make a responsive display from the dashboard?",
                sender: "me",
                time: "Today 11:52",
                isImage: true,
                image: "/dashboard-screenshot.jpg",
                read: true
            },
            {
                text: "Is there a plugin to do this task?",
                sender: "me",
                time: "Today 11:52",
                read: true
            },
            {
                text: "No plugins. You just have to make it smaller according to the size of the phone.",
                sender: "them",
                time: "Today 11:53"
            },
            {
                text: "Thank you very much. I'm glad you asked about the assignment",
                sender: "them",
                time: "Today 11:53"
            },
        ],
    });
    const [input, setInput] = useState("");
    const chatRef = useRef(null);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages((prev) => ({
            ...prev,
            [selectedUser.name]: [
                ...(prev[selectedUser.name] || []),
                {
                    text: input,
                    sender: "me",
                    time: `Today ${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}`,
                    read: true
                }
            ],
        }));
        setInput("");
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages[selectedUser.name]]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <div className="navbar-container">
                <Navbar name={"Message"} isActive={false}/>
            </div>

            <div className="flex min-h-[130vh] bg-gray-50">
                {/* Left sidebar */}
                <div className="w-1/4 bg-white ">
                    {/* Search bar */}
                    <div className="p-4">
                        <div className="flex items-center bg-gray-50 rounded-lg p-[0.85rem]">
                            <input
                                type="text"
                                placeholder="Search Name"
                                className="bg-transparent outline-none w-full text-sm"
                            />
                            <SearchNormal size="20" color="#54577a"/>
                        </div>
                    </div>

                    {/* User list */}
                    <div className="overflow-y-auto">
                        {users.map((user, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-4 cursor-pointer ${
                                    selectedUser.name === user.name ? "bg-[#FAFAFA]" : "hover:bg-gray-50"
                                }`}
                                onClick={() => setSelectedUser(user)}
                            >
                                <div className="relative">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${user.name.replace(' ', '+')}&background=random`;
                                        }}
                                    />

                                </div>
                                <div className="ml-3 flex-1">
                                    <div className="flex justify-between">
                                        <h3 className="font-medium text-sm">{user.name}</h3>
                                        <span className="text-xs text-gray-500">{user.time}</span>
                                    </div>
                                    <p className={`text-xs ${user.unread ? "text-gray-800" : "text-gray-500"} truncate`}>
                                        {user.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main chat area */}
                <div className="flex-1 flex flex-col">
                    {/* Chat header */}
                    <div className="flex items-center justify-between p-4 bg-white">
                        <div className="flex items-center">
                            <img
                                src={selectedUser.avatar}
                                alt={selectedUser.name}
                                className="w-10 h-10 rounded-full object-cover"
                                onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${selectedUser.name.replace(' ', '+')}&background=random`;
                                }}
                            />
                            <div className="ml-3">
                                <h2 className="font-medium">{selectedUser.name}</h2>
                                <p className="text-xs text-green-500">• Online</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                className={`h-[3rem] w-[3rem] flex justify-center items-center  rounded-full border-2 border-secondary-100  `}>
                                <Video size="20" color="#54577a"/>
                            </button>
                            <button
                                className={`h-[3rem] w-[3rem] flex justify-center items-center  rounded-full border-2 border-secondary-100  `}>
                                <Call size="20" color="#54577a"/>
                            </button>
                        </div>
                    </div>

                    {/* Message container */}
                    <div className="flex-1  p-4 overflow-y-auto" ref={chatRef}>
                        <div className="flex justify-center mb-4">
                <span className="bg-black text-white text-xs px-[0.75rem] py-[0.5rem] rounded-[0.625rem]">
                  Today
                </span>
                        </div>

                        {(messages[selectedUser.name] || []).map((msg, index: number) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} mb-4`}
                            >
                                {msg.sender !== "me" && (
                                    <img
                                        src={selectedUser.avatar}
                                        alt={selectedUser.name}
                                        className="w-8 h-8 rounded-full mr-2 self-end"
                                        onError={(e) => {
                                            e.target.src = `https://ui-avatars.com/api/?name=${selectedUser.name.replace(' ', '+')}&background=random`;
                                        }}
                                    />
                                )}

                                <div className="max-w-xs">
                                    {msg.isImage && (
                                        <div
                                            className={`mb-1 rounded-lg overflow-hidden ${msg.sender === "me" ? "bg-blue-500" : "bg-gray-100"}`}>
                                            <img
                                                src={msg.image}
                                                alt="Dashboard screenshot"
                                                className="w-full"
                                                onError={(e) => {
                                                    e.target.src = "/api/placeholder/400/300";
                                                }}
                                            />
                                            <div
                                                className={`p-2 ${msg.sender === "me" ? "text-white" : "text-gray-800"}`}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    )}

                                    {!msg.isImage && (
                                        <div
                                            className={`p-3 rounded-lg ${
                                                msg.sender === "me"
                                                    ? "bg-primary-500 text-white rounded-br-none"
                                                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                    )}

                                    <div
                                        className={`text-xs mt-1 ${msg.sender === "me" ? "text-right" : "text-left"} text-gray-500 flex items-center ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                                        {msg.time}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input area */}
                    <div className="bg-white p-3 flex items-center">
                        <input
                            type="text"
                            placeholder="Send your message..."
                            className="flex-1 rounded-full px-4 py-2 outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                       <div>
                           <button
                               className=" text-white p-2 rounded-[0.625rem] ml-2"
                           >
                               <AttachCircle size="18" color="#54577a" variant="Outline"/>
                           </button>

                           <button
                               className="bg-primary-500 text-white p-2 rounded-[0.625rem] ml-2"
                               onClick={sendMessage}
                           >
                               <Send2 size="18" variant={"Bold"} color="#fff"/>
                           </button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}