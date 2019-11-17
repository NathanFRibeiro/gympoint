import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, TitleBar, HorizontalInputs } from './styles';
import api from '~/services/api';
import throwError from '~/services/error';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Insert a valid e-mail')
    .required('E-mail is required'),
  weight: Yup.number()
    .typeError('Insert a valid number')
    .required('Age is required')
    .positive('This number must be positive'),
  height: Yup.number()
    .typeError('Insert a valid number')
    .required('Age is required')
    .positive('This number must be positive'),
  age: Yup.number()
    .typeError('Insert a valid number')
    .required('Age is required')
    .positive('This number must be positive')
    .integer(),
});

export default function FormStudent({ match }) {
  const [mode, setMode] = useState('New');
  const [student, setStudent] = useState([]);
  const history = useHistory();
  const { studentID } = match.params;

  useEffect(() => {
    async function loadStudent() {
      const { data } = await api.get('students');

      const item = await data.filter(object => object.id === Number(studentID));

      await setStudent(item[0]);
    }

    if (studentID) {
      loadStudent();
      setMode('Edit');
    }
  }, [match]);

  async function create(data) {
    const { name, email, age, height, weight } = data;

    await api
      .post('students', {
        name,
        email,
        age,
        height,
        weight,
      })
      .then(() => {
        toast.success(`Success! Student created.`, {
          autoClose: 5000,
        });
        history.push('/students');
      })
      .catch(error => {
        throwError(error);
      });
  }

  async function edit(data) {
    const { name, email, age, height, weight } = data;

    await api
      .put(`students/${studentID}`, {
        name,
        email,
        age,
        height,
        weight,
      })
      .then(() => {
        toast.success(`Success! Student edited.`, {
          autoClose: 5000,
        });
        history.push('/students');
      })
      .catch(error => {
        throwError(error);
      });
  }

  async function handleSubmit(data) {
    mode === 'New' ? create(data) : edit(data);
  }

  return (
    <Container>
      <TitleBar>
        {mode === 'New' ? <h2>Student Registration</h2> : <h2>Student Name</h2>}

        <Link to="/students/">
          <button type="button">BACK</button>
        </Link>
      </TitleBar>

      <Form initialData={student} schema={schema} onSubmit={handleSubmit}>
        <div>
          <strong>FULL NAME</strong>
          <Input name="name" type="text" placeholder="Bruce Wayne" />
        </div>

        <div>
          <strong>E-MAIL</strong>
          <Input name="email" type="email" placeholder="bruce@wayne.com" />
        </div>

        <HorizontalInputs>
          <div>
            <strong>AGE</strong>
            <Input name="age" min="0" type="number" placeholder="35" />
          </div>
          <div>
            <strong>WEIGHT (Kg)</strong>
            <Input
              name="weight"
              step="00.1"
              min="0"
              type="number"
              placeholder="95,5"
            />
          </div>
          <div>
            <strong>HEIGHT</strong>
            <Input
              name="height"
              step="0.01"
              min="0"
              type="number"
              placeholder="1,88"
            />
          </div>
        </HorizontalInputs>

        <button type="submit">
          {mode === 'New' ? 'CREATE STUDENT' : 'UPDATE STUDENT'}
        </button>
      </Form>
    </Container>
  );
}
