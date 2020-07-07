import React from 'react';
import Header from '@/components/Header';

interface BaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout = ({ children } : BaseLayoutProps) => {
  return (
    <div className="BaseLayout">
      <Header />
      {children}
    </div>
  )
};

export default BaseLayout;
