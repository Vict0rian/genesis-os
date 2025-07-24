import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="flex justify-center items-center h-screen flex-row gap-5">{children}</div>;
};

export default Layout;
