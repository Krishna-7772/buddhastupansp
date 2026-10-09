import React, { useState } from 'react';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { MonumentOverview } from './components/MonumentOverview';
import { HistoricalTimeline } from './components/HistoricalTimeline';
import { ExcavationSection } from './components/ExcavationSection';
import { ArchitecturalDocumentation } from './components/ArchitecturalDocumentation';
import { RelicAssemblage } from './components/RelicAssemblage';
import { MaterialsResearch } from './components/MaterialsResearch';
import { VideoExperience } from './components/VideoExperience';
import { ConservationSection } from './components/ConservationSection';
import { OpenResearchQuestions } from './components/OpenResearchQuestions';
import { LocationSection } from './components/LocationSection';
import { DocumentationGallery } from './components/DocumentationGallery';
import { ResearchSources } from './components/ResearchSources';
import { SiteFooter } from './components/SiteFooter';
import { SourceModal } from './components/SourceModal';
import { EvidenceKeyModal } from './components/EvidenceKeyModal';

export function App() {
  const [activeSourceId, setActiveSourceId] = useState(null);
  const [evidenceKeyOpen, setEvidenceKeyOpen] = useState(false);
  const [activeModalImage, setActiveModalImage] = useState(null);

  const handleSelectSource = (sourceId) => {
    setActiveSourceId(sourceId);
  };

  const handleCloseSourceModal = () => {
    setActiveSourceId(null);
  };

  const handleOpenEvidenceKey = () => {
    setEvidenceKeyOpen(true);
  };

  const handleCloseEvidenceKey = () => {
    setEvidenceKeyOpen(false);
  };

  const handleOpenImage = (imageItem) => {
    setActiveModalImage(imageItem);
  };

  const handleCloseModalImage = () => {
    setActiveModalImage(null);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Sticky Header with navigation and Evidence Key trigger */}
      <SiteHeader onOpenEvidenceKey={handleOpenEvidenceKey} />

      {/* Main Content Sections */}
      <main id="main-content">
        
        {/* Section 01: Hero with Background Video (Hero.mp4) */}
        <HeroSection onSelectSource={handleSelectSource} />

        {/* Section 02 & 03: At a Glance & Understanding the Monument */}
        <MonumentOverview 
          onSelectSource={handleSelectSource} 
          onOpenEvidenceKey={handleOpenEvidenceKey}
          onOpenImage={handleOpenImage}
        />

        {/* Section 04: Historical Chronology */}
        <HistoricalTimeline onSelectSource={handleSelectSource} />

        {/* Section 05: The 1882 Excavation by Bhagvanlal Indraji */}
        <ExcavationSection 
          onSelectSource={handleSelectSource} 
          onOpenImage={handleOpenImage}
        />

        {/* Section 06: Architectural & Sculptural Documentation (Genuine Site Photography) */}
        <ArchitecturalDocumentation onOpenImage={handleOpenImage} />

        {/* Section 07: The Relic Assemblage */}
        <RelicAssemblage onSelectSource={handleSelectSource} />

        {/* Section 08: Material and Scientific Study (2023 Research) */}
        <MaterialsResearch onSelectSource={handleSelectSource} />

        {/* Section 09: Dedicated On-Site Video Experience */}
        <VideoExperience />

        {/* Section 10: Conservation and the Monument Today */}
        <ConservationSection 
          onSelectSource={handleSelectSource} 
          onOpenImage={handleOpenImage}
        />

        {/* Section 11: Open Research Questions */}
        <OpenResearchQuestions onSelectSource={handleSelectSource} />

        {/* Section 12: Location & Topography (Signboards & Visitor Orientation) */}
        <LocationSection 
          onSelectSource={handleSelectSource} 
          onOpenImage={handleOpenImage}
        />

        {/* Section 13: Curated Photographic & Documentary Gallery */}
        <DocumentationGallery 
          activeModalImage={activeModalImage}
          onCloseModalImage={handleCloseModalImage}
        />

        {/* Section 14: Research Sources & Bibliography */}
        <ResearchSources />

      </main>

      {/* Footer & Academic Transparency */}
      <SiteFooter />

      {/* Interactive Modals */}
      {activeSourceId && (
        <SourceModal 
          sourceId={activeSourceId} 
          onClose={handleCloseSourceModal} 
        />
      )}

      <EvidenceKeyModal 
        isOpen={evidenceKeyOpen} 
        onClose={handleCloseEvidenceKey} 
      />

    </div>
  );
}

export default App;
