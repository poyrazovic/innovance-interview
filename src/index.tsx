import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col} from 'antd';
import './index.less';
import * as serviceWorker from './serviceWorker';
import { Router } from './config/router';

ReactDOM.render(
  <React.StrictMode>
    <Row gutter={30}>
      <Col span={8} offset={8}>
        deneme
      </Col>
    </Row>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}