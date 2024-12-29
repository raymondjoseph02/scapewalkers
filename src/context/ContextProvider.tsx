import React, { createContext, ReactNode, useRef, useState } from "react";

// Define the context type
interface ContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsServiceInView: React.Dispatch<React.SetStateAction<boolean>>;
  servicesRef: React.RefObject<HTMLDivElement>;
  IsServiceInview: boolean;
}

// Create context with undefined default
export const Context = createContext<ContextType | undefined>(undefined);

// Props for the provider
interface ContextProviderProp {
  children: ReactNode;
}

// Context provider component
export const ContextProvider = ({ children }: ContextProviderProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [IsServiceInview, setIsServiceInView] = useState(false);

  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
        servicesRef,
        IsServiceInview,
        setIsServiceInView,
      }}
    >
      {children}
    </Context.Provider>
  );
};
