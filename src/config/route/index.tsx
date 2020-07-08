import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BaseLayout from '@/layouts/BaseLayout';
import LoginLayout from '@/layouts/LoginLayout';
import { Login, Dashboard, About } from '@/containers';

const page404 = () => <h1>404!</h1>;

const Routes = () => {
  if (!JSON.parse(localStorage.getItem('auth'))) {
    localStorage.setItem('auth', 'false');

    return (
      <LoginLayout>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="**" render={page404} />
        </Switch>
      </LoginLayout>
    )
  }

  return (
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route path="**" render={page404} />
      </Switch>
    </BaseLayout>
  )
}

export default Routes;