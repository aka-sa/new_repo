
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgentShowcase from './components/AgentShowcase';
// import ResearchProjects from './components/ResearchProjects'; // Removed
import PromptGallery from './components/PromptGallery';
import VoiceAgentDemo from './components/VoiceAgentDemo'; // Reinstated
// import AutomationDashboard from './components/AutomationDashboard'; // Removed
import Blog from './components/Blog';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import ResearchBotModal from './components/ResearchBotModal';
import WriterBotModal from './components/WriterBotModal';
import FinAgentModal from './components/FinAgentModal';
import EduAgentModal from './components/EduAgentModal'; // Import the new EduAgent modal
import { SECTION_IDS } from './constants';

const App: React.FC = () => {
  const [isResearchBotModalOpen, setIsResearchBotModalOpen] = useState(false);
  const [isWriterBotModalOpen, setIsWriterBotModalOpen] = useState(false);
  const [isFinAgentModalOpen, setIsFinAgentModalOpen] = useState(false);
  const [isEduAgentModalOpen, setIsEduAgentModalOpen] = useState(false); // State for EduAgentModal

  const openResearchBotModal = () => setIsResearchBotModalOpen(true);
  const closeResearchBotModal = () => setIsResearchBotModalOpen(false);

  const openWriterBotModal = () => setIsWriterBotModalOpen(true);
  const closeWriterBotModal = () => setIsWriterBotModalOpen(false);

  const openFinAgentModal = () => setIsFinAgentModalOpen(true);
  const closeFinAgentModal = () => setIsFinAgentModalOpen(false);

  const openEduAgentModal = () => setIsEduAgentModalOpen(true); // Handler to open EduAgentModal
  const closeEduAgentModal = () => setIsEduAgentModalOpen(false); // Handler to close EduAgentModal

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow"> {/* Removed container mx-auto here, sections will manage their own padding */}
        <Hero id={SECTION_IDS.about} />
        <AgentShowcase 
          id={SECTION_IDS.agentShowcase} 
          onOpenResearchBotModal={openResearchBotModal}
          onOpenWriterBotModal={openWriterBotModal}
          onOpenFinAgentModal={openFinAgentModal}
          onOpenEduAgentModal={openEduAgentModal} // Pass handler to AgentShowcase
        />
        {/* <ResearchProjects id={SECTION_IDS.projects} /> Removed */}
        <PromptGallery id={SECTION_IDS.promptGallery} />
        <VoiceAgentDemo id={SECTION_IDS.voiceDemo} /> {/* Reinstated */}
        <Blog id={SECTION_IDS.blog} />
        <Skills id={SECTION_IDS.skills} />
        {/* <AutomationDashboard id={SECTION_IDS.automationDashboard} /> Removed */}
        <Resume id={SECTION_IDS.resume} />
        <Contact id={SECTION_IDS.contact} />
      </main>
      <Footer />
      <AIChatbot />
      <ResearchBotModal isOpen={isResearchBotModalOpen} onClose={closeResearchBotModal} />
      <WriterBotModal isOpen={isWriterBotModalOpen} onClose={closeWriterBotModal} />
      <FinAgentModal isOpen={isFinAgentModalOpen} onClose={closeFinAgentModal} />
      <EduAgentModal isOpen={isEduAgentModalOpen} onClose={closeEduAgentModal} /> {/* Render EduAgentModal */}
    </div>
  );
};

export default App;
