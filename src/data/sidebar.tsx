import { Book1, Category2, Message, Setting2, UserOctagon } from 'iconsax-react';
import { JSX } from 'react';

export interface SidebarItem {
  id: number;
  icon: JSX.Element;
  title: string;
  path: string;
}

export const sidebar = [

  {
    id:1,
    icon: <Category2 size={24} color="#8E92BC"/>,
    title: 'Overview',
    path: "/overview",
  }, {
    id:2,
    icon:<Book1 size={24} color="#8E92BC"/>,
    title: 'Task',
    path: "/task",
  }, {
    id:3,
    icon: <UserOctagon size={24} color="#8E92BC"/>,
    title: 'Mentors',
    path: "/mentors",
  },
  {
    id:4,
    icon: <Message size={24} color="#8E92BC" />,
    title: 'Messages',
    path: "/messages",
  },
  {
    id:5,
    icon:<Setting2 size={24}  color="#8E92BC" />,
    title: 'Settings',
    path: "/settings",
  },






]