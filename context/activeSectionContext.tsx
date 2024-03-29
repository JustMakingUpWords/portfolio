"use client";

import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSection = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContext({ children }: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSection.Provider
      value={{
        activeSection: activeSection,
        setActiveSection: setActiveSection,
        timeOfLastClick: timeOfLastClick,
        setTimeOfLastClick: setTimeOfLastClick
      }}>
      {children}
    </ActiveSection.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSection);

  if (context === null) {
    throw new Error("useActiveSection must be used within an ActiveSectionContext");
  }

  return context;
}
