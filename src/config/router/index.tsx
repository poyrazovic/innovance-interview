import React from 'react';
import LoginLayout from '../../layouts/LoginLayout/index';
import BaseLayout from '../../layouts/BaseLayout/index';

export const Router = () => {
  if (!JSON.parse(localStorage.getItem('auth'))) {
    console.log('Login');
    return <LoginLayout />
  } else {
    console.log('Dashboard');
    return <BaseLayout />
  }
};