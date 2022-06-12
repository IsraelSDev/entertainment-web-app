import React, { createContext, useState } from 'react';


const authContext = createContext();

const AuthContext = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </authContext.Provider >
  );
}

export { AuthContext, authContext };
