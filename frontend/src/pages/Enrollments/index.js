import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaCircle } from 'react-icons/fa';

import { Container, TitleBar, EnrollmentTable } from './styles';

export default function Enrollments() {
  const history = useHistory();

  function handleDelete() {
    console.log('deleted');
  }

  function handleEdit(studentID) {
    history.push(`/enrollments/${studentID}`);
  }

  return (
    <Container>
      <TitleBar>
        <h2>Student Management</h2>

        <Link to="/enrollments/new">
          <button type="button">
            <FaPlus /> New Enrollment
          </button>
        </Link>
      </TitleBar>

      <EnrollmentTable>
        <thead>
          <tr>
            <th>STUDENT</th>
            <th>PLAN</th>
            <th>START</th>
            <th>END</th>
            <th>ACTIVE</th>

            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nathan Ribeiro</td>
            <td>Monster</td>
            <td>30 de novembro de 2018</td>
            <td>30 de Favereiro de 2019</td>
            <td>
              {true ? (
                <FaCircle color="#1dd1a1" />
              ) : (
                <FaCircle color="#ff6b6b" />
              )}
            </td>
            <td>
              <div>
                <button onClick={() => handleEdit(1)} type="button">
                  <FaEdit size={16} color="#fff" />
                </button>
                <button
                  onClick={() => {
                    window.confirm(
                      'Are you sure you wish to delete this enrollment?'
                    ) && handleDelete();
                  }}
                  type="button"
                >
                  <FaTrash size={16} color="#fff" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </EnrollmentTable>
    </Container>
  );
}
