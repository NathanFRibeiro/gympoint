import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus, FaEdit } from 'react-icons/fa';

import { Container, TitleBar, StudentTable } from './styles';

import api from '~/services/api';

export default function Students() {
  const [students, setStudents] = useState([]);

  const history = useHistory();

  function handleEdit(studentID) {
    history.push(`/students/${studentID}`);
  }

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      setStudents(response.data);
    }

    loadStudents();
  }, []);

  async function handleChange(e) {
    if (e.key === 'Enter') {
      const response = await api.get(`students/?name=${e.target.value}`);

      setStudents(response.data);
    }
  }

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
          <input
            onKeyDown={handleChange}
            type="text"
            placeholder="Search student"
          />
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
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>
                <div>
                  <button onClick={() => handleEdit(student.id)} type="button">
                    <FaEdit size={16} color="#fff" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentTable>
    </Container>
  );
}
