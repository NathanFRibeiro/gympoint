import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/students">STUDENTS</Link>
          <Link to="/plans">PLANS</Link>
          <Link to="/enrollments">ENROLLMENTS</Link>
          <Link to="/helporders">HELP ORDERS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Nathan Ribeiro</strong>
              <Link to="/">Log Out</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
