import React from 'react';
import SvgUri from 'react-native-svg-uri';
import { Image } from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/Input';
import logo from '~/assets/logo.svg';

import { Container, Form } from './styles';

export default function SignIn() {
  return (
    <Container>
      <SvgUri width="200" height="200" source={logo} />
      <Form>
        <Input name="student-id" placeholder="Type you student ID" />
        <Button OnPress={() => {}}>Sign In</Button>
      </Form>
    </Container>
  );
}
