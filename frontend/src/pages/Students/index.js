import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

import { Container, TitleBar, StudentTable } from './styles';
import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  const history = useHistory();

  function handleDelete() {
    console.log('deleted');
  }

  function handleEdit(studentID) {
    history.push(`/students/${studentID}`);
  }

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
      console.log(students);
    }

    loadStudents();
  }, []);

  return (
    <Container>
      <TitleBar>
        <h2>Student Management</h2>
        <aside>
          <Link to="/students/new">
            <button type="button">
              <FaPlus /> New Student
            </button>
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
                <button onClick={() => handleEdit(1)} type="button">
                  <FaEdit size={16} color="#fff" />
                </button>
                <button
                  onClick={() => {
                    window.confirm(
                      'Are you sure you wish to delete this student?'
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
      </StudentTable>
    </Container>
  );
}
