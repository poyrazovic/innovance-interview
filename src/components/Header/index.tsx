import React from 'react';
import { Row, Col } from 'antd';
import { HeaderWrapper } from './index.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Row>
        <Col span={12}>Logo</Col>
        <Col span={12}>
          Test
        </Col>
      </Row>
    </HeaderWrapper>
  );
}

export default Header;
