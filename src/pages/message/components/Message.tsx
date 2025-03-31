import { useState, useEffect, useRef } from 'react';
import Navbar from '../../../components/common/Navbar.tsx';
import usersData from '../../../data/message/users.json';
import messagesData from '../../../data/message/messages.json';
import ChatSidebar from './ChatSidebar';
import ChatContainer from './ChatContainer.tsx';

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
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const getLastMessagePreview = (userName: string): string => {
    const userMessages = messages[userName] || [];
    if (userMessages.length === 0) return '';

    const lastMessage = userMessages[userMessages.length - 1];
    const prefix = lastMessage.sender === 'me' ? 'You: ' : '';
    const text = lastMessage.text;
    return `${prefix}${
      text.length > 25 ? text.substring(0, 25) + '...' : text
    }`;
  };

  const getLastMessageTime = (userName: string): string => {
    const userMessages = messages[userName] || [];
    if (userMessages.length === 0) return '';

    const lastMessage = userMessages[userMessages.length - 1];
    return lastMessage.time.replace('Today ', '');
  };

  // Fixed to ensure it always returns a boolean
  const isLastMessageRead = (userName: string): boolean => {
    const userMessages = messages[userName] || [];
    if (userMessages.length === 0) return false;

    const lastMessage = userMessages[userMessages.length - 1];
    const user = usersData.users.find((u) => u.name === userName);
    return !!(
      lastMessage.sender === 'me' && lastMessage.read && user?.isOnline === true
    );
  };

  const sendMessage = () => {
    if (!input.trim() && !imageFile) return;

    const newMessage = {
      text: input.trim(),
      sender: 'me',
      time: `Today ${new Date().getHours()}:${String(
        new Date().getMinutes()
      ).padStart(2, '0')}`,
      read: true
    };

    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      Object.assign(newMessage, {
        isImage: true,
        image: imageUrl
      });
    }

    setMessages((prev) => ({
      ...prev,
      [selectedUser.name]: [...(prev[selectedUser.name] || []), newMessage]
    }));

    setInput('');
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages[selectedUser.name]]);

  return (
    <div className="flex flex-col max-h-[100vh]">
      {/* Navbar */}
      <div
        className={`navbar-container border-l-2 border-secondary-100/40 ${!showSidebar ? 'md:block hidden' : ''}`}
      >
        <Navbar name={'Message'} isActive={false} />
      </div>

      <div className="flex flex-1 max-h-full bg-secondary-100/5 border-t-2 border-l-2 border-secondary-100/50">
        {/* Sidebar Component */}
        <ChatSidebar
          users={usersData.users}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          getLastMessagePreview={getLastMessagePreview}
          getLastMessageTime={getLastMessageTime}
          isLastMessageRead={isLastMessageRead}
        />

        {/* Main Chat Container Component */}
        <ChatContainer
          selectedUser={selectedUser}
          messages={messages[selectedUser.name] || []}
          input={input}
          setInput={setInput}
          imagePreview={imagePreview}
          setImagePreview={setImagePreview}
          imageFile={imageFile}
          setImageFile={setImageFile}
          sendMessage={sendMessage}
          setShowSidebar={setShowSidebar}
          fileInputRef={fileInputRef}
          chatRef={chatRef}
        />
      </div>
    </div>
  );
}