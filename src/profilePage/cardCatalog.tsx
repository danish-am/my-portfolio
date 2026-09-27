import React from 'react';
import {
  FaAward,
  FaCode,
  FaEnvelope,
  FaMapMarkedAlt,
  FaMusic,
  FaPenNib,
  FaRocket,
} from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { PosterTheme } from '../components/Poster';

export type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=600&auto=format&fit=crop`;

export interface CatalogCard {
  title: string;
  image: string;
  route: string;
  icon: React.ReactNode;
  theme: PosterTheme;
  match: string;
  label: string; // real detail shown in the boxed rating slot
  tags: string[];
  top10?: boolean;
  progress?: number; // % shown on the "Continue Watching" bar
}

export const cards: Record<string, CatalogCard> = {
  permit: {
    image: unsplash('photo-1454165804606-c3d57bc86b40'),
    title: 'Work Permit',
    route: '/work-permit',
    icon: <FaMapMarkedAlt />,
    theme: { from: '#b31217', to: '#3a0a0c' },
    match: '99% Match',
    label: 'Canada',
    tags: ['Verified', 'Canada'],
  },
  skills: {
    image: unsplash('photo-1555066931-4365d14bab8c'),
    title: 'Skills',
    route: '/skills',
    icon: <FaCode />,
    theme: { from: '#0f9b8e', to: '#0b2a3a' },
    match: '98% Match',
    label: '10 Skills',
    tags: ['AWS', 'Azure', 'IaC'],
  },
  experience: {
    image: unsplash('photo-1558494949-ef010cbdcc31'),
    title: 'Experience',
    route: '/work-experience',
    icon: <MdWork />,
    theme: { from: '#4b3ec9', to: '#170f3a' },
    match: '97% Match',
    label: '2019–Now',
    tags: ['SRE', 'Cloud', '5+ Yrs'],
  },
  certifications: {
    image: unsplash('photo-1667372393119-3d4c48d07fc9'),
    title: 'Certifications',
    route: '/certifications',
    icon: <FaAward />,
    theme: { from: '#d4a017', to: '#3d2a00' },
    match: '95% Match',
    label: '8 Certs',
    tags: ['AWS', 'Azure', 'HashiCorp'],
    progress: 80,
  },
  projects: {
    image: unsplash('photo-1605745341112-85968b19335b'),
    title: 'Projects',
    route: '/projects',
    icon: <FaRocket />,
    theme: { from: '#e5480a', to: '#3a0d00' },
    match: '92% Match',
    label: '6 Projects',
    tags: ['CI/CD', 'Terraform'],
    top10: true,
  },
  contact: {
    image: unsplash('photo-1512428559087-560fa5ceab42'),
    title: 'Contact Me',
    route: '/contact-me',
    icon: <FaEnvelope />,
    theme: { from: '#1f9d55', to: '#07301a' },
    match: '100% Match',
    label: 'Toronto',
    tags: ['Available', 'Hire Now'],
    progress: 35,
  },
  music: {
    image: unsplash('photo-1579952363873-27f3bade9f55'),
    title: 'Music & Sports',
    route: '/music-and-sports',
    icon: <FaMusic />,
    theme: { from: '#c2185b', to: '#33061a' },
    match: '85% Match',
    label: 'Off Duty',
    tags: ['Hobbies', 'Active'],
    progress: 65,
  },
  blogs: {
    image: unsplash('photo-1499750310107-5fef28a66643'),
    title: 'Blogs',
    route: '/blogs',
    icon: <FaPenNib />,
    theme: { from: '#5f6b7a', to: '#15191f' },
    match: '90% Match',
    label: 'Medium',
    tags: ['Tech Writing', 'DevOps'],
    progress: 50,
  },
};

export const topPicksConfig: Record<ProfileType, CatalogCard[]> = {
  recruiter: [cards.permit, cards.skills, cards.experience, cards.certifications, cards.projects, cards.contact],
  developer: [cards.skills, cards.projects, cards.certifications, cards.experience, cards.contact],
  stalker: [cards.contact, cards.projects, cards.experience, cards.certifications],
  adventure: [cards.music, cards.projects, cards.contact, cards.certifications],
};

export const continueWatchingConfig: Record<ProfileType, CatalogCard[]> = {
  recruiter: [cards.music, cards.blogs, cards.contact],
  developer: [cards.music, cards.blogs, cards.certifications, cards.contact],
  stalker: [cards.blogs, cards.contact],
  adventure: [cards.music, cards.certifications, cards.contact],
};
