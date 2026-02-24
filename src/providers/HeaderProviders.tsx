import React from 'react';

type HeaderContextType = {
  trekStickyHeader: boolean;
  setTrekStickyHeader: (value: boolean) => void;
};

export const HeaderContext = React.createContext<HeaderContextType | null>(
  null
);

type Props = {
  children: React.ReactNode;
};

const HeaderProviders = ({ children }: Props) => {
  const [trekStickyHeader, setTrekStickyHeader] = React.useState(false);

  return (
    <HeaderContext.Provider value={{ trekStickyHeader, setTrekStickyHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProviders;
