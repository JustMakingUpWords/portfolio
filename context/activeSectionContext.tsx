"use client";

import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSection = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContext({ children }: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSection.Provider
      value={{
        activeSection: activeSection,
        setActiveSection: setActiveSection
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
