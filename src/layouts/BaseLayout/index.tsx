import React from 'react';
import Header from '@/components/Header';
import Content from '@/components/Content';

interface BaseLayoutProps {
  children: React.ReactNode
}

const BaseLayout = ({ children } : BaseLayoutProps) => {
  return (
    <div className="BaseLayout">
      <Header />
      <Content>
        {children}
      </Content>
    </div>
  )
};

export default BaseLayout;
