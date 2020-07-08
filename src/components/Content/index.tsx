import React from 'react';
import { Row, Col } from 'antd';
import { ContentWrapper } from './index.styled';

interface ContentProps {
  children: React.ReactNode
}

const Content = ({ children } : ContentProps) => {
  return (
    <ContentWrapper>
      <Row>
        <Col span={16} offset={4}>
          {children}
        </Col>
      </Row>
    </ContentWrapper>
  )
};

export default Content;