import React from 'react';
import { Row, Col, Space, Button } from 'antd';
import { HeaderWrapper } from './index.styled';
import { NavLink } from 'react-router-dom';

const logout = () => {
  localStorage.setItem('auth', 'false');
  window.open('/', '_self');
};

const Header = () => {
  return (
    <HeaderWrapper>
      <Row align="middle" justify="space-between">
        <Col span={6}><h1>Pokédex</h1></Col>
        <Col span={3}>
          <Space align="baseline" size="large">
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/about">About</NavLink>
            <Button type="primary" onClick={logout}>Logout</Button>
          </Space>
        </Col>
      </Row>
    </HeaderWrapper>
  );
}

export default Header;
