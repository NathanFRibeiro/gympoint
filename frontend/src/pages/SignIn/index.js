import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignIn() {
  function handleSubmit() {}

  return (
    <>
      <img src={logo} alt="GymPoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <div>
          <strong>Your e-mail</strong>
          <Input name="email" type="email" placeholder="example@mail.com" />
        </div>

        <div>
          <strong>Your password</strong>
          <Input name="password" type="password" />
        </div>

        <button type="submit">Sign In</button>
      </Form>
    </>
  );
}
