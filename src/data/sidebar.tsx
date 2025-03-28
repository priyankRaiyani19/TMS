import { Book1, Category2, Message, Setting2, UserOctagon } from 'iconsax-react';
import { ElementType } from 'react';

export interface SidebarItem {
  id: number;
  icon: ElementType;
  title: string;
  path: string;
}

export const sidebar: SidebarItem[] = [
  {
    id: 1,
    icon: Category2,
    title: 'Overview',
    path: "/overview",
  },
  {
    id: 2,
    icon: Book1,
    title: 'Task',
    path: "/task",
  },
  {
    id: 3,
    icon: UserOctagon,
    title: 'Mentors',
    path: "/mentors",
  },
  {
    id: 4,
    icon: Message,
    title: 'Messages',
    path: "/messages",
  },
  {
    id: 5,
    icon: Setting2,
    title: 'Settings',
    path: "/settings",
  },
];
