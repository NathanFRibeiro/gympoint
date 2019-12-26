import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { format } from 'date-fns-tz';
import { FaPlus, FaEdit, FaTrash, FaCircle } from 'react-icons/fa';

import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import { Container, TitleBar, EnrollmentTable } from './styles';
import api from '~/services/api';
import throwError from '~/services/error';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);
  const history = useHistory();

  async function configureEnrollments(data) {
    const dataEnrollments = await data.map(enrollment => ({
      ...enrollment,
      startDateFormatted: format(parseISO(enrollment.start_date), 'PP'),
      endDateFormatted: format(parseISO(enrollment.end_date), 'PP'),
    }));

    setEnrollments(dataEnrollments);
  }

  async function loadEnrollments() {
    await api
      .get('enrollment/')
      .then(response => {
        configureEnrollments(response.data);
      })
      .catch(error => {
        throwError(error);
      });
  }

  useEffect(() => {
    loadEnrollments();
  }, []);

  async function handleDelete(id) {
    await api
      .delete(`enrollment/${id}`)
      .then(() => {
        toast.success(`Success! Enrollment deleted.`, {
          autoClose: 5000,
        });
      })
      .catch(error => {
        throwError(error);
      });

    loadEnrollments();
  }

  function handleEdit(studentID) {
    history.push(`/enrollments/${studentID}`);
  }

  return (
    <Container>
      <TitleBar>
        <h2>Enrollment Management</h2>

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
          {enrollments.length === 0 ? (
            <center>No enrollment registered.</center>
          ) : (
            enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td>
                  {enrollment.student
                    ? enrollment.student.name
                    : 'Deleted student'}
                </td>
                <td>
                  {enrollment.plan ? enrollment.plan.title : 'Deleted plan'}
                </td>
                <td>{enrollment.startDateFormatted}</td>
                <td>{enrollment.endDateFormatted}</td>
                <td>
                  {enrollment.active ? (
                    <FaCircle color="#1dd1a1" />
                  ) : (
                    <FaCircle color="#ff6b6b" />
                  )}
                </td>
                <td>
                  <div>
                    <button
                      onClick={() => handleEdit(enrollment.id)}
                      type="button"
                    >
                      <FaEdit size={16} color="#fff" />
                    </button>
                    <button
                      onClick={() => {
                        window.confirm(
                          'Are you sure you wish to delete this enrollment?'
                        ) && handleDelete(enrollment.id);
                      }}
                      type="button"
                    >
                      <FaTrash size={16} color="#fff" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </EnrollmentTable>
    </Container>
  );
}
