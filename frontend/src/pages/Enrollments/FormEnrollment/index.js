import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, TitleBar, HorizontalInputs } from './styles';
import CustomAsyncSelect from '~/components/CustomAsyncSelect';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  weight: Yup.number()
    .typeError('Insert a valid number')
    .required('Age is required')
    .positive('This number should be a positive'),
  height: Yup.number()
    .typeError('Insert a valid number')
    .required('Age is required')
    .positive('This number should be a positive'),
  age: Yup.number()
    .typeError('Insert a valid number')
    .required('Age is required')
    .positive('This number should be a positive')
    .integer(),
});

export default function FormEnrollment({ match }) {
  const [mode, setMode] = useState('New');
  const [planSelected, setPlanSelected] = useState('');
  const [plans, setPlans] = useState([{ id: '1', title: 'Plan 1' }]);

  useEffect(() => {
    const { enrollmentID } = match.params;

    if (enrollmentID) {
      setMode('Edit');
      // Get enrollment and fill the form
    }
  }, [match]);

  async function loadStudents(name) {
    // const response = await api.get('students', {
    //   params: {
    //     page: 1,
    //     name,
    //   },
    // });

    const response = [];

    const options = response.data.map(student => ({
      id: student.id,
      name: student.name,
    }));

    return options;
  }

  const loadOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(loadStudents(inputValue));
      }, 1000);
    });

  return (
    <Container>
      <TitleBar>
        {mode === 'New' ? (
          <h2>Enrollment Registration</h2>
        ) : (
          <h2>Enrollment edit</h2>
        )}

        <Link to="/enrollments/">
          <button type="button">BACK</button>
        </Link>
      </TitleBar>

      <Form schema={schema}>
        <div>
          <strong>STUDENT</strong>
          <CustomAsyncSelect
            name="student_id"
            placeholder="Search student"
            cacheOptions
            loadOptions={loadOptions}
          />
        </div>

        <HorizontalInputs>
          <div>
            <strong>PLAN</strong>
            <select
              onChange={e => setPlanSelected(e.target.value)}
              value={planSelected}
            >
              <option value="" selected>
                Select a plan
              </option>
              {plans.map(p => (
                <option value={p.id}>{p.title}</option>
              ))}
            </select>
          </div>
          <div>
            <strong>START DATE</strong>
            <Input name="start_date" type="date" />
          </div>
          <div>
            <strong>END DATE</strong>
            <Input name="start_date" type="date" />
          </div>
          <div>
            <strong>TOTAL PRICE</strong>
            <Input disabled name="totalPrice" step="0.01" type="number" />
          </div>
        </HorizontalInputs>

        <button type="submit">
          {mode === 'New' ? 'CREATE ENROLLMENT' : 'UPDATE ENROLLMENT'}
        </button>
      </Form>
    </Container>
  );
}
