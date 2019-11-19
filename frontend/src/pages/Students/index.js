import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus, FaEdit } from 'react-icons/fa';

import { Container, TitleBar, StudentTable } from './styles';

import api from '~/services/api';
import throwError from '~/services/error';

export default function Students() {
  const [students, setStudents] = useState([]);

  const history = useHistory();

  function handleEdit(studentID) {
    history.push(`/students/${studentID}`);
  }

  useEffect(() => {
    async function loadStudents() {
      await api
        .get('students/')
        .then(response => {
          setStudents(response.data);
        })
        .catch(error => {
          throwError(error);
        });
    }

    loadStudents();
  }, []);

  async function handleChange(e) {
    if (e.key === 'Enter') {
      await api
        .get(`students/?name=${e.target.value}`)
        .then(response => {
          setStudents(response.data);
        })
        .catch(error => {
          throwError(error);
        });
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
          {students.length === 0 ? (
            <center>No students registered.</center>
          ) : (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <div>
                    <button
                      onClick={() => handleEdit(student.id)}
                      type="button"
                    >
                      <FaEdit size={16} color="#fff" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </StudentTable>
    </Container>
  );
}
