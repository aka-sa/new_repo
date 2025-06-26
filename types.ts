
import React from 'react';

export interface IconProps {
  className?: string;
  path?: string; // For generic icon component
}

export interface NavItem {
  label: string;
  href: string;
}

// Removed Project interface as it's no longer used
// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   technologies: string[];
//   stackBadges?: string[]; // For specific tech stack display
//   imageUrl?: string;
//   videoPreviewUrl?: string; // Placeholder for video
//   lottieAnimationUrl?: string; // Placeholder for Lottie
//   liveLink?: string;
//   repoLink?: string;
//   details?: string; 
// }

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  link: string;
  fullContent?: string; // Added to store detailed blog post content
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: number; 
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement<IconProps>;
}

export interface AgentCardData {
  id: string;
  name: string;
  icon: React.ReactElement<IconProps>;
  description: string;
  tryNowLink: string;
}

export interface PromptCardData {
  id: string;
  title: string;
  description: string;
  prompt: string;
  tags?: string[];
}

export interface BuiltPrompt {
  role: string;
  task: string;
  context: string;
  format: string;
  fullPrompt: string;
}