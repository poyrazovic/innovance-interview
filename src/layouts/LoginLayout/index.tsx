import React from 'react';
import { Row, Col } from 'antd';

const LoginLayout = () => {
  return (
    <div className="Login">
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8
        </Col>
        <Col span={8}>col-8</Col> 
      </Row>
    </div>
  )
}

export default LoginLayout;
