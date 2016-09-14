import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/app';

import AboutPage from '../containers/about-page';
import CounterPage from '../containers/counter-page';
import TimelinePage from '../containers/timeline';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CounterPage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="resume" component={ AboutPage }/>
    <Route path="demo" component={ AboutPage }/>
    <Route path="timeline" component={ TimelinePage }/>
  </Route>
);
