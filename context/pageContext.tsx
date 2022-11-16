import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type InitialContext = {
  currentPage: number;
  handlePage?: (page: number) => void;
};

export const PageContext = createContext<InitialContext>({ currentPage: 1 });

export const PageContextProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PageContext.Provider value={{ currentPage, handlePage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
