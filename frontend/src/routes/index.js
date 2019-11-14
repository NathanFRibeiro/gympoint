import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import HelpOrders from '~/pages/HelpOrders';
import Route from './Route';

import FormStudent from '~/pages/Students/FormStudent';
import FormPlan from '~/pages/Plans/FormPlan';
import FormEnrollment from '~/pages/Enrollments/FormEnrollment';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/new" exact component={FormStudent} isPrivate />
      <Route
        path="/students/:studentID"
        exact
        component={FormStudent}
        isPrivate
      />
      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/plans/new" exact component={FormPlan} isPrivate />
      <Route path="/plans/:planID" exact component={FormPlan} isPrivate />

      <Route path="/enrollments" exact component={Enrollments} isPrivate />
      <Route
        path="/enrollments/new"
        exact
        component={FormEnrollment}
        isPrivate
      />
      <Route
        path="/enrollments/:enrollmentID"
        exact
        component={FormEnrollment}
        isPrivate
      />

      <Route path="/helporders" exact component={HelpOrders} isPrivate />
    </Switch>
  );
}
