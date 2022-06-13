import React, { createContext, useState } from 'react';

const sectionContext = createContext();

const SectionContext = ({ children }) => {

  const [section, setSection] = useState("Trending");

  return (
    <sectionContext.Provider value={{ section, setSection }} >
      {children}
    </sectionContext.Provider >
  );
}

export { SectionContext, sectionContext };
