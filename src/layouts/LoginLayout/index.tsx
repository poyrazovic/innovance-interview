import React from 'react';
import { Row, Col } from 'antd';

interface LoginLayoutProps {
  children?: React.ReactNode
}

const LoginLayout = ({ children } : LoginLayoutProps) => {
  return (
    <div className="Login">
      <Row>
        <Col span={8} offset={8}>
          {children}
        </Col>
      </Row>
    </div>
  )
}

export default LoginLayout;
