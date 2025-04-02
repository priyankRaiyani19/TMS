import React, { SyntheticEvent } from 'react';
import { Send2, Call, Video, ArrowLeft, AttachCircle, CloseCircle } from 'iconsax-react';

interface User {
  name: string;
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

interface MainChatContainerProps {
  selectedUser: User;
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  imagePreview: string | null;
  setImagePreview: (preview: string | null) => void;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  sendMessage: () => void;
  setShowSidebar: (show: boolean) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  chatRef: React.RefObject<HTMLDivElement>;
}

const ChatContainer: React.FC<MainChatContainerProps> = ({
                                                           selectedUser,
                                                           messages,
                                                           input,
                                                           setInput,
                                                           imagePreview,
                                                           setImagePreview,
                                                           // imageFile,
                                                           setImageFile,
                                                           sendMessage,
                                                           setShowSidebar,
                                                           fileInputRef,
                                                           chatRef
                                                         }) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    // Main container
    <div className="flex-1 flex flex-col max-h-[100vh]  overflow-y-hidden md:h-[85.5vh]   h-full fixed md:relative w-full ">
      {/* Chat header - fixed height */}
      <div className="flex items-center justify-between p-4 md:px-[3rem] bg-white">
        <div className="flex items-center">
          <button
            onClick={() => setShowSidebar(true)}
            className="md:hidden mr-3"
          >
            <ArrowLeft size="20" color="#000" />
          </button>
        <div className={`flex gap-[0.75rem]`}>
          <img
            src={selectedUser.avatar}
            alt={selectedUser.name}
            className="w-10  rounded-full object-cover"
            onError={(e: SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${selectedUser.name.replace(
                ' ',
                '+'
              )}&background=random`;
            }}
          />
          <div>
            <h2 className="font-semibold">{selectedUser.name}</h2>
            <p className="text-xs text-green-500">• Online</p>
          </div>
        </div>
        </div>
        <div className="flex w-[8rem] h-[3.25rem] gap-[1.5rem]">
          <button
            className="h-[3.25rem] w-[3.25rem] flex justify-center items-center rounded-full border-2 border-secondary-100/50 hover:bg-secondary-200/50"
          >
            <Video size="24" color="#8E92BC" />
          </button>
          <button
            className="h-[3.25rem] w-[3.25rem] flex justify-center items-center rounded-full border-2 border-secondary-100/50 hover:bg-secondary-200/50 "
          >
            <Call size="24" color="#8E92BC" />
          </button>
        </div>
      </div>

      {/* Messages area - takes remaining height with scroll */}
      <div className="flex-1 overflow-y-auto" ref={chatRef}>
        <div className="p-4">
          <div className="flex justify-center mb-4">
            <span className="bg-black text-white text-xs px-[0.75rem] py-[0.5rem] rounded-[0.625rem]">
              Today
            </span>
          </div>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === 'me' ? 'justify-end' : 'justify-start'
              } mb-4`}
            >
              <div className="max-w-[80%] md:max-w-xs">
                {msg.isImage && (
                  <div
                    className={`mb-1 p-2 rounded-b-[0.625rem] overflow-hidden ${
                      msg.sender === 'me' ? 'bg-primary-500 rounded-l-[0.625rem]' : 'bg-gray-100 rounded-l-[0.625rem]'
                    }`}
                  >
                    <img
                      src={msg.image}
                      alt="Shared image"
                      className="w-full"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.src = '/api/placeholder/400/300';
                      }}
                    />
                    <div
                      className={`p-2 text-[0.825rem] tracking-[0.15px] ${
                        msg.sender === 'me' ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                )}

                {!msg.isImage && (
                  <div
                    className={`p-3 text-[0.825rem] tracking-[0.15px] font-medium rounded-b-lg max-w-[21.25rem] ${
                      msg.sender === 'me'
                        ? 'bg-primary-500 text-white rounded-l-[0.625rem]'
                        : 'bg-white text-secondary-500   rounded-r-[0.625rem]'
                    }`}
                  >
                    {msg.text}
                  </div>
                )}

                <div
                  className={`text-xs mt-1 ${
                    msg.sender === 'me' ? 'text-right' : 'text-left'
                  } text-secondary-300 flex items-center ${
                    msg.sender === 'me' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.time}
                  {msg.sender === 'me' &&
                    msg.read }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input field - fixed at bottom */}
      <div className="bg-white p-3">
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
                  fileInputRef.current.value = '';
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
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                if (!file.type.startsWith('image/')) {
                  alert('Please upload an image file');
                  return;
                }

                const imageUrl = URL.createObjectURL(file);
                setImagePreview(imageUrl);
                setImageFile(file);
              }}
            />
            <div className="flex flex-row">
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
  );
};

export default ChatContainer;