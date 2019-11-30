import React from 'react';

import { Container } from './styles';
import MultilineInput from '~/components/MultilineInput';
import Button from '~/components/Button';

export default function NewOrder() {
  return (
    <Container>
      <MultilineInput placeholder="Type your help order" multiline />
      <Button>Send</Button>
    </Container>
  );
}
