/// <reference types="react-scripts" />

declare global {

  type MenuId = 'about' | 'skills' | 'projects' | 'contact' | 'resume';
  type SocialId = 'email' | 'github' | 'linkedin' | 'telegram' | 'instagram';
  interface MenuList {
    id: MenuId;
    icon: number;
    title: string;
  }

  interface Contact {
    id: SocialId;
    title: string;
    value: string;
  }

  interface WorkItem {
    id: string;
    title: string;
    subtitle: string;
    cover: string;
    description: string;
    link: string;
    secondaryLink?: string;
    tags: string[];
    images: string[];
  }
}

export { };
