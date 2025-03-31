import React, { SyntheticEvent } from 'react';
import { SearchNormal } from 'iconsax-react';
import DoubleTick from './DoubleTick';

interface User {
  name: string;
  message: string;
  time: string;
  unread: boolean;
  avatar: string;
  isOnline: boolean;
}

interface ChatSidebarProps {
  users: User[];
  selectedUser: User;
  setSelectedUser: (user: User) => void;
  setShowSidebar: (show: boolean) => void;
  showSidebar: boolean;
  getLastMessagePreview: (userName: string) => string;
  getLastMessageTime: (userName: string) => string;
  isLastMessageRead: (userName: string) => boolean; // Changed to ensure it always returns boolean
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
                                                   users,
                                                   selectedUser,
                                                   setSelectedUser,
                                                   setShowSidebar,
                                                   showSidebar,
                                                   getLastMessagePreview,
                                                   getLastMessageTime,
                                                   isLastMessageRead
                                                 }) => {
  return (
    <div
      className={`w-full md:w-1/4 bg-white absolute md:relative max-h-full z-10 transition-transform duration-300 ease-in-out border-r-2 border-r-secondary-100/40 ${
        showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
    >
      {/* Search bar */}
      <div className="p-4">
        <div className="flex items-center bg-gray-50 rounded-lg p-[0.85rem]">
          <input
            type="text"
            placeholder="Search Name"
            className="bg-transparent outline-none w-full text-sm"
          />
          <SearchNormal size="20" color="#000" />
        </div>
      </div>

      {/* User list */}
      <div className="overflow-y-auto max-h-[75vh] no-scrollbar">
        {users.map((user, index) => (
          <div
            key={index}
            className={`flex items-center p-4 cursor-pointer ${
              selectedUser.name === user.name
                ? 'bg-[#FAFAFA]'
                : 'hover:bg-gray-50'
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
                    ' ',
                    '+'
                  )}&background=random`;
                }}
              />
            </div>
            <div className="ml-3 flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold text-sm">{user.name}</h3>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-500">
                    {user.name === selectedUser.name &&
                    user.time === 'active'
                      ? 'active'
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
                    user.unread ? 'text-gray-800' : 'text-gray-500'
                  } truncate flex-1`}
                >
                  {getLastMessagePreview(user.name)}
                </p>
                {getLastMessagePreview(user.name).startsWith('You:') &&
                  user.isOnline && (
                    <DoubleTick isRead={isLastMessageRead(user.name)} />
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;