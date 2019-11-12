/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TitleBar, StudentTable } from './styles';

export default function Students() {
  return (
    <Container>
      <TitleBar>
        <h2>Students Management</h2>
        <aside>
          <Link to="/students/new">
            <button type="button">Register</button>
          </Link>
          <input type="text" placeholder="Search student" />
        </aside>
      </TitleBar>

      <StudentTable>
        <thead>
          <tr>
            <th>NAME</th>
            <th>E-MAIL</th>
            <th>AGE</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nathan Ribeiro</td>
            <td>nathan@gympoint.com</td>
            <td>25</td>
            <td>
              <div>
                <a href="#">edit</a>
                <a href="#">delete</a>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nathan Ribeiro</td>
            <td>nathan@gympoint.com</td>
            <td>25</td>
            <td>
              <div>
                <a href="#">edit</a>
                <a href="#">delete</a>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nathan Ribeiro</td>
            <td>nathan@gympoint.com</td>
            <td>25</td>
            <td>
              <div>
                <a href="#">edit</a>
                <a href="#">delete</a>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nathan Ribeiro</td>
            <td>nathan@gympoint.com</td>
            <td>25</td>
            <td>
              <div>
                <a href="#">edit</a>
                <a href="#">delete</a>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nathan Ribeiro</td>
            <td>nathan@gympoint.com</td>
            <td>25</td>
            <td>
              <div>
                <a href="#">edit</a>
                <a href="#">delete</a>
              </div>
            </td>
          </tr>

          <tr>
            <td>Nathan Ribeiro</td>
            <td>nathan@gympoint.com</td>
            <td>25</td>
            <td>
              <div>
                <a href="#">edit</a>
                <a href="#">delete</a>
              </div>
            </td>
          </tr>
        </tbody>
      </StudentTable>
    </Container>
  );
}
