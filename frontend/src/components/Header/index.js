import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/logo-header.svg';

import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/action';

export default function Header() {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/dashboard">HOME</Link>
          <Link to="/students">STUDENTS</Link>
          <Link to="/plans">PLANS</Link>
          <Link to="/enrollments">ENROLLMENTS</Link>
          <Link to="/helporders">HELP ORDERS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>
                <strong>{name}</strong>
              </strong>
              <Link onClick={handleSignOut} to="/">
                Log Out
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
