import { useState } from "react";
import AssessmentModal from "./AssessmentModal";
import DynamicContentRenderer from "./DynamicContentRenderer";
import { useDisplayConfig } from "../hooks/useDisplayConfig";

export default function MainContent({ onSectionChange }: { onSectionChange?: (section: string) => void }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { config } = useDisplayConfig();

  // Get the home content from the display config
  const homeContent = config?.layout?.components?.find(
    (component: any) => component.type === "home"
  )?.content || [];

  return (
    <>
      <main className="main-content">
        <DynamicContentRenderer 
          content={homeContent}
          config={config || undefined}
          onSectionChange={onSectionChange}
        />
        
        <AssessmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </main>
    </>
  );
} 