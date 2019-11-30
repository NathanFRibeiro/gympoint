import React from 'react';

import { Image } from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/Input';
import logo from '~/assets/logo.png';

import { Container, Form } from './styles';

export default function SignIn(props) {
  function handleSign() {
    const { navigation } = props;

    navigation.navigate('AppTab');
  }

  return (
    <Container>
      <Image style={{ width: 250, height: 150 }} source={logo} />
      <Form>
        <Input name="student-id" placeholder="Type your student ID" />
        <Button onPress={() => handleSign()}>Sign In</Button>
      </Form>
    </Container>
  );
}
