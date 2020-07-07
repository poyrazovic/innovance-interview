import React from 'react';
import SPCard from '@/components/SPCard';
import { Form, Input, Button } from 'antd';

interface FormSubmitType {
  username: string,
  password: string
}

const formSubmit = (fieldsObject: FormSubmitType) : void => {
  if (fieldsObject.username === 'admin' && fieldsObject.password === 'admin') {
    localStorage.setItem('auth', 'true');
    window.open('/', '_self');
  }
};

const Login = () => {
  const { Item } = Form;

  return (
    <SPCard heading="Login">
      <Form name="Login" layout="vertical" onFinish={formSubmit}>
        <Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input autoComplete="off" />
        </Item>
        <Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Item>
      </Form>
    </SPCard>
  )
}

export default Login;
