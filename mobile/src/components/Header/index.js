import React from 'react';

import logobar from '~/assets/logobar.png';
import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logobar} />
    </Container>
  );
}
