import React from 'react';
import { NavItem, SocialLink, IconProps, AgentCardData, PromptCardData } from './types';

export const SECTION_IDS = {
  about: 'about',
  agentShowcase: 'agent-showcase',
  promptGallery: 'prompt-gallery',
  voiceDemo: 'voice-demo', // Reinstated
  blog: 'blog',
  skills: 'skills',
  resume: 'resume',
  contact: 'contact',
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'About', href: `#${SECTION_IDS.about}` },
  { label: 'Agents', href: `#${SECTION_IDS.agentShowcase}` },
  { label: 'Prompts', href: `#${SECTION_IDS.promptGallery}` },
  { label: 'Voice Demo', href: `#${SECTION_IDS.voiceDemo}` }, // Reinstated
  { label: 'Blog', href: `#${SECTION_IDS.blog}` },
  { label: 'Skills', href: `#${SECTION_IDS.skills}` },
  { label: 'Resume', href: `#${SECTION_IDS.resume}` },
  { label: 'Contact', href: `#${SECTION_IDS.contact}` },
];

// --- ICON COMPONENTS ---
export const GitHubIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className || "w-6 h-6"}>
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
</svg>
);

export const ScholarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className || "w-6 h-6"}>
    <path d="M12 3L1 9l4 2.18v6.32L12 21l7-3.5V11.18L23 9zm-7 7.18L12 13.5l7-3.32-2.25-1.18L12 11.32 7.25 9 5 10.18zm0 0"/>
  </svg>
);

export const HuggingFaceIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-6 h-6"}>
    <path d="M20.025 14.495a.49.49 0 00-.48-.34l-1.536.058a.491.491 0 00-.413.21l-2.35 3.755a.49.49 0 00.076.648l.848.621a.49.49 0 00.64-.075l-1.11-1.767a.49.49 0 01.413-.21h3.559a.49.49 0 00.413-.768l-1.68-2.532zm-16.05 0a.49.49 0 01.48-.34l1.536.058c.19 0 .363.105.413.21l2.35 3.755a.49.49 0 01-.076.648l-.848.621a.49.49 0 01-.64-.075l-1.11-1.767a.49.49 0 00-.413-.21H.441a.49.49 0 01-.413-.768l1.68-2.532zM12 3.583c-2.578 0-4.697 1.94-4.947 4.446a.49.49 0 00.488.53h9.011a.49.49 0 00.488-.53C16.782 5.522 14.578 3.583 12 3.583z"/>
  </svg>
);

export const ChatIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-2.28-2.28c-.113-.113-.227-.227-.337-.337H16.5c-1.136 0-2.1-.847-2.193-1.98a7.873 7.873 0 01-.072-1.02c-.027-.34-.052-.68-.072-1.02V11.7c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072c.34-.027.68-.052 1.02-.072Zm-7.5 0c.884.284 1.5 1.128 1.5 2.097V16.5c0 .046-.003.09-.006.134H6.75c-1.136 0-2.1-.847-2.193-1.98a7.873 7.873 0 01-.072-1.02c-.027-.34-.052-.68-.072-1.02V11.7c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072c.34-.027.68-.052 1.02-.072Z" />
  </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const BrainIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3.75h.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.75m-9-5.25h.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.75m7.5-1.5V21m-13.5-9.75h.008v.008H4.5v-.008Zm-.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0Z" />
  </svg>
);

export const QuillIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

export const CopyIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
  </svg>
);

export const LightBulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.355a7.5 7.5 0 01-3 0m3 0a7.5 7.5 0 00-3 0m.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 3v.01M12 6.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>
);

export const MicrophoneIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125S10.875 5.754 10.875 6.375v7.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
);

export const FolderArrowDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = ({ className }) => ( 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

export const RefreshCwIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

export const PauseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
  </svg>
);

export const StopIcon: React.FC<IconProps> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
  </svg>
);

export const InfoIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v3.375m0 0-.375.375M12 13.125l.375.375M12 13.125V15m0-6.375a3.375 3.375 0 110 6.75 3.375 3.375 0 010-6.75zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ className }) => ( 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75l-1.25-1.75L14.25 12l1.5-1.25L17 9.25l1.25 1.5L19.75 12zM12 2.25l.938 2.063L15 5.25l-.938 2.063L12 9.375l-.938-2.063L9 5.25l.938-2.063L12 2.25z" />
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ className }) => ( 
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

export const DollarSignIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A18.75 18.75 0 0112 22.5c-2.786 0-5.433-.608-7.824-1.679a8.962 8.962 0 014.323-4.71z" />
  </svg>
);

export const UserCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const LayersIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .298-.12.585-.329.795l-1.348 1.348a.996.996 0 01-1.298.21l-.387-.775L3.75 12l.319-1.913A6 6 0 016.115 5.19z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 12l.387-.775a.996.996 0 011.298-.21l1.348 1.348c.21.21.329.497.329.795v1.089c0 .298-.12.585-.329.795l-1.348 1.348a.996.996 0 01-1.298.21l-.387-.775M12.75 12l.387.775a.996.996 0 001.298.21l1.348-1.348a.996.996 0 00-.21-1.298l-1.348-1.348a.996.996 0 00-1.298-.21l-.387.775M12.75 12l-.387.775a.996.996 0 01-1.298.21l-1.348-1.348a.996.996 0 01.21-1.298l1.348-1.348a.996.996 0 011.298-.21l.387.775" />
  </svg>
);


export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

export const SpeakerWaveIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
  </svg>
);

export const Cog8ToothIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774a1.125 1.125 0 01.12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.894.15c.542.09.94.56.94 1.109v1.093c0 .55-.398 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.93.78-.165.398-.142.854.108 1.204l.527.738a1.125 1.125 0 01-.12 1.45l-.773.773a1.125 1.125 0 01-1.45-.12l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.505-.78.93l-.15.894c-.09.542-.56.94-1.109.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93-.398-.164-.855-.142-1.205.108l-.737.527a1.125 1.125 0 01-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.093c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.383.93-.78.165-.398.142.854-.108-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45.12l.737.527c.35.25.807.272 1.204.108.397-.165.71-.505.78-.93l.15-.894z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.964 2.398-2.175 2.398H5.925c-1.21 0-2.175-1.085-2.175-2.398V14.15M17.25 7.5V5.25c0-1.313-.964-2.398-2.175-2.398H8.925c-1.21 0-2.175 1.085-2.175 2.398V7.5M12 11.25V17.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 5.25H14.25M7.5 7.5H16.5" />
  </svg>
);

export const ArrowUpTrayIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

export const ServerIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3M5.25 14.25v-3.75m13.5 3.75v-3.75m0-3A2.25 2.25 0 0015 5.25h-6A2.25 2.25 0 006.75 7.5v3.75m0 0H12M12 11.25V12m0 0H11.25m0 0H12m2.25-2.25H12m3.75 2.25H12" />
  </svg>
);

export const TrendingUpIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

export const ListBulletIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75V17.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M8.25 21v-1.5M4.5 15.75H3m18 0h-1.5M21 12c0 4.556-3.868 8.25-8.625 8.25S3.75 16.556 3.75 12c0-4.556 3.868-8.25 8.625-8.25S21 7.444 21 12zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);
export const WrenchScrewdriverIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.096-2.396-.94-2.924l-.924-.462c-.96-.48-2.132-.216-2.924.94L11.42 15.17zm0 0L21 21m-8.59-.172L15.17 11.42" />
  </svg>
);


// --- DATA CONSTANTS ---
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/akanshasharma-example', icon: <GitHubIcon /> }, 
  { name: 'LinkedIn', url: 'https://linkedin.com/in/akanshasharma-example', icon: <LinkedInIcon /> }, 
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=example', icon: <ScholarIcon /> }, 
  { name: 'Hugging Face', url: 'https://huggingface.co/akanshasharma-example', icon: <HuggingFaceIcon /> }, 
];

export const EMAIL_ADDRESS = "akansha.sharma.portfolio@example.com"; 
export const RESUME_LINK = "/resume.pdf"; // Assuming resume.pdf is in public folder

export const AGENT_CARDS_DATA: AgentCardData[] = [
  {
    id: 'research-bot',
    name: '🧠 ResearchBot',
    icon: <BrainIcon className="w-8 h-8 text-indigo-500" />,
    description: 'Summarizes complex research papers, generates citations, and helps you stay updated with the latest findings.',
    tryNowLink: '#', 
  },
  {
    id: 'writer-bot',
    name: '✍️ WriterBot',
    icon: <QuillIcon className="w-8 h-8 text-green-500" />,
    description: 'Assists in academic writing, blog post generation, and refining your content for clarity and impact.',
    tryNowLink: '#', 
  },
  {
    id: 'fin-agent',
    name: '💸 FinAgent',
    icon: <ChartBarIcon className="w-8 h-8 text-blue-500" />,
    description: 'Provides financial analytics, market trend insights, and helps in understanding complex financial data.',
    tryNowLink: '#', 
  },
  {
    id: 'edu-agent',
    name: '📚 EduAgent',
    icon: <AcademicCapIcon className="w-8 h-8 text-teal-500" />, // Changed from BookOpenIcon, new color
    description: 'Creates personalized learning modules, generates quizzes, and supports educational content development.',
    tryNowLink: '#', 
  },
];

export const PROMPT_GALLERY_DATA: PromptCardData[] = [
  {
    id: 'llm-research',
    title: 'LLM Research Prompt',
    description: 'A prompt designed to extract key information, methodologies, and findings from academic papers on LLMs.',
    prompt: "Analyze the provided research paper on Large Language Models. Identify the core problem statement, the proposed methodology, key datasets used, main results, and limitations. Summarize the paper's contribution to the field in 3 bullet points. Paper: [Paste Paper Text or Link Here]",
    tags: ['Research', 'LLM', 'Summarization'],
  },
  {
    id: 'auto-writer',
    title: 'Auto-Writer Kickstart Prompt',
    description: 'Generate an outline and introductory paragraph for a blog post on a given topic.',
    prompt: "Topic: The Impact of Generative AI on Creative Industries. Generate a 5-section blog post outline and an engaging introductory paragraph (approx. 100 words). Focus on both opportunities and challenges.",
    tags: ['Content Generation', 'Blog', 'Outline'],
  },
  {
    id: 'search-summarize',
    title: 'Search & Summarize Prompt',
    description: 'A prompt for an agent that can search the web for a topic and provide a concise summary.',
    prompt: "Search the web for the latest advancements in Retrieval Augmented Generation (RAG) techniques in the last 6 months. Provide a summary of 3-4 key advancements, including their significance. Cite your sources.",
    tags: ['Web Search', 'RAG', 'Summarization'],
  },
];

export const AI_CHATBOT_CONSTANTS = {
  MODEL_NAME: "gemini-2.5-flash-preview-04-17",
  SYSTEM_INSTRUCTION: `You are Akansha Sharma's friendly, expert AI portfolio assistant. Your goal is to provide helpful, concise, and accurate information about Akansha's research, projects, skills, and experience. 

Akansha Sharma is an AI Researcher and GenAI Developer with expertise in:
- Large Language Models (LLMs) and Generative AI
- Agent Development (e.g., CrewAI, LangChain)
- Technical Writing and AI Automation
- Specific projects: AI-Powered Research Assistant SaaS, Real-Time Remote Mouse Control, FinTech Research, Multihop Q&A Systems, Academic Agents with CrewAI.
- Skills: Python, React, TensorFlow, PyTorch, NLP, Computer Vision, Cloud Platforms.
- Her resume is available at: ${RESUME_LINK}

Key tasks you can help with:
1.  **Answer questions about Akansha's portfolio:** Discuss her projects, research interests, skills, and experience.
2.  **Suggest blog posts or papers:** Based on Akansha's work or user interest, you can suggest relevant topics or look up information using web search.
3.  **Provide links:** Share the link to her resume or guide users to her contact information.
4.  **Discuss AI topics:** Engage in general discussions about AI, LLMs, Deep Learning, and Data Science, reflecting Akansha's expertise.

This chat interface uses Google Search grounding via the Gemini API to access up-to-date information. When providing information from web searches, clearly cite the sources.
Engage politely and professionally. If you don't know an answer to a portfolio-specific question, state that you don't have that specific information but can try to find related information online. Keep responses relatively brief and focused.`,
  INITIAL_GREETING: "Hello! I'm Akansha's AI assistant. I can discuss her work, provide her resume link, and even search the web for current AI topics. How can I help you today?"
};

export const TYPING_ANIMATION_STRINGS = [
  "AI Researcher",
  "Agent Developer",
  "Technical Writer",
  "GenAI Automator",
];

// Stack Badges - common ones
export const STACK_BADGES_LOOKUP: { [key: string]: { bgColor: string; textColor: string } } = {
  REACT: { bgColor: 'bg-sky-100', textColor: 'text-sky-700' },
  PYTHON: { bgColor: 'bg-blue-100', textColor: 'text-blue-700' },
  NODEJS: { bgColor: 'bg-green-100', textColor: 'text-green-700' },
  WEBSOCKET: { bgColor: 'bg-purple-100', textColor: 'text-purple-700'},
  GENERATIVEAI: { bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' },
  LLM: { bgColor: 'bg-fuchsia-100', textColor: 'text-fuchsia-700' },
  CREWAI: { bgColor: 'bg-orange-100', textColor: 'text-orange-700' },
  LANGCHAIN: { bgColor: 'bg-lime-100', textColor: 'text-lime-700' },
  TENSORFLOW: { bgColor: 'bg-amber-100', textColor: 'text-amber-700' },
  PYTORCH: { bgColor: 'bg-red-100', textColor: 'text-red-700' },
  MISTRAL: { bgColor: 'bg-teal-100', textColor: 'text-teal-700' },
  QWEN: { bgColor: 'bg-cyan-100', textColor: 'text-cyan-700' },
  FASTAPI: { bgColor: 'bg-emerald-100', textColor: 'text-emerald-700' },
  FINTECH: { bgColor: 'bg-pink-100', textColor: 'text-pink-700' },
  NLP: { bgColor: 'bg-yellow-100', textColor: 'text-yellow-700' },
  HUGGINGFACE: { bgColor: 'bg-rose-100', textColor: 'text-rose-700' },
};

// Suggested Prompts for Agent Modals
export const RESEARCHBOT_SUGGESTED_PROMPTS: {label: string, query: string, targetTab?: 'text' | 'pdf' | 'voice'}[] = [
  { label: "Latest in Quantum Computing", query: "Summarize the latest advancements in quantum computing research.", targetTab: 'text' },
  { label: "AI Ethics in Healthcare", query: "Find papers on AI ethics in healthcare published in the last year.", targetTab: 'text' },
  { label: "PDF: Climate Change Impact", query: "Please summarize this PDF on climate change impact assessment.", targetTab: 'pdf' },
  { label: "Voice: Future of LLMs", query: "What is the future outlook for Large Language Models?", targetTab: 'voice' },
];

export const WRITERBOT_SUGGESTED_PROMPTS: {label: string, query: string, style?: string, targetTab?: 'generate' | 'refine' | 'cite' | 'voice'}[] = [
  { label: "Blog: GenAI in Education", query: "Generative AI in education", style: "blog_post", targetTab: 'generate' },
  { label: "Abstract: Multi-modal Learning", query: "Multi-modal retrieval using contrastive learning", style: "academic_abstract", targetTab: 'generate' },
  { label: "Refine: Paragraph on AI", query: "AI is a very big field. It has many parts. Some are good, some are bad. We need to study it more.", targetTab: 'refine' },
  { label: "Cite: arXiv Paper", query: "arXiv:2305.12800", targetTab: 'cite'},
];

export const FINAGENT_SUGGESTED_PROMPTS: {label: string, query: string, targetTab?: 'market' | 'explain' | 'portfolio' | 'voice'}[] = [
  { label: "Market: AAPL Today", query: "AAPL", targetTab: 'market' },
  { label: "Explain: P/E Ratio", query: "Price-to-Earnings Ratio (P/E)", targetTab: 'explain' },
  { label: "Portfolio: Risk of Tech Stocks", query: "What are the risks associated with a tech-heavy portfolio?", targetTab: 'portfolio' }, 
  { label: "Voice: Tesla Investment", query: "Is Tesla a good investment right now?", targetTab: 'voice' },
];

export const EDUAGENT_SUGGESTED_PROMPTS: {label: string, query: string, level?: string, quizType?: string, targetTab?: 'explain' | 'quiz' | 'plan' | 'summarize' | 'voice'}[] = [
  { label: "Explain: Newton's Laws", query: "Newton's Laws of Motion", level: "8th Grade", targetTab: 'explain' },
  { label: "Quiz: Climate Change", query: "Climate Change Basics", quizType: "MCQ", targetTab: 'quiz' },
  { label: "Plan: Python Basics", query: "Learn Python Basics for beginners", targetTab: 'plan' },
  { label: "Summarize: PDF Chapter", query: "Summarize chapter 3 of the uploaded PDF and create flashcards.", targetTab: 'summarize' },
  { label: "Voice: Photosynthesis", query: "Explain photosynthesis.", targetTab: 'voice' },
];
// Ensure a final newline character
