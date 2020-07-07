import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import BaseLayout from '@/layouts/BaseLayout';
import LoginLayout from '@/layouts/LoginLayout';
import { Login, Dashboard, About } from '@/containers';

const Routes = () => {
  if (!JSON.parse(localStorage.getItem('auth'))) {
    localStorage.setItem('auth', 'false');

    return (
      <LoginLayout>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route path="**" render={() => <h1>404!</h1>} />
          </Switch>
        </BrowserRouter>
      </LoginLayout>
    )
  }

  return (
    <BaseLayout>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
          <Route exact={true} path="/about" component={About} />
          <Route path="**" render={() => <h1>404!</h1>} />
        </Switch>
      </BrowserRouter>
    </BaseLayout>
  )
}

export default Routes;