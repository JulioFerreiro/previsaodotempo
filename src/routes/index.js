import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoutes';
import Inicial from '../pages/Inicial';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Inicial} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
