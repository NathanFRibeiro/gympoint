import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import HelpOrders from '~/pages/HelpOrders';
import NewStudent from '~/pages/Students/NewStudent';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/new" exact component={NewStudent} isPrivate />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/enrollments" exact component={Enrollments} isPrivate />
      <Route path="/helporders" exact component={HelpOrders} isPrivate />
    </Switch>
  );
}
