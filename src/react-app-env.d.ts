/// <reference types="react-scripts" />

declare global {

  type MenuId = 'about' | 'skills' | 'projects' | 'contact' | 'resume';
  type SocialId = 'email' | 'github' | 'linkedin' | 'telegram' | 'instagram';
  interface MenuList {
    id: MenuId;
    icon: number;
    title: string;
  }

  interface AboutItem {
    id: string;
    icon: JSX.Element;
    text: string;
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
    myDuties: string;
    website?: string;
    aboutLink?: string;
    tags: string[];
    images: string[];
  }

  interface SkillItem {
    id: string;
    name: string;
    isFavorite: boolean;
  }

  interface StackItem {
    id: number;
    title: string;
    grade: 1 | 2 | 3 | 4 | 5;
  }

  interface ExperienceItem {
    id: number;
    company: string;
    position: string;
    period: string;
    duties: string[];
    description: string;
  }

  interface CourseItem {
    id: number;
    title: string;
    description: string;
    hasCertificate: boolean;
    link?: string;
  }
}

export { };
