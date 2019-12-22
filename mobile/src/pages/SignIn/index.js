import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Image } from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/Input';
import logo from '~/assets/logo.png';

import { signInRequest } from '~/store/modules/auth/action';

import { Container, Form } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [studentID, setStudentID] = useState(null);

  function handleSign() {
    dispatch(signInRequest(studentID));
  }

  return (
    <Container>
      <Image style={{ width: 250, height: 150 }} source={logo} />
      <Form>
        <Input
          name="student-id"
          placeholder="Type your student ID"
          returnKeyType="send"
          onSubmitEditing={handleSign}
          value={studentID}
          onChangeText={setStudentID}
        />
        <Button onPress={handleSign}>Sign In</Button>
      </Form>
    </Container>
  );
}
