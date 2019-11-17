/* eslint-disable camelcase */
import React, { useState, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';
import { parseISO, addMonths, format, isValid } from 'date-fns';
import { toast } from 'react-toastify';
import { Container, TitleBar, HorizontalInputs } from './styles';
import CustomAsyncSelect from '~/components/CustomAsyncSelect';
import api from '~/services/api';
import throwError from '~/services/error';

// const schema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string()
//     .email('Insert a valid e-mail')
//     .required('E-mail is required'),
//   weight: Yup.number()
//     .typeError('Insert a valid number')
//     .required('Age is required')
//     .positive('This number should be a positive'),
//   height: Yup.number()
//     .typeError('Insert a valid number')
//     .required('Age is required')
//     .positive('This number should be a positive'),
//   age: Yup.number()
//     .typeError('Insert a valid number')
//     .required('Age is required')
//     .positive('This number should be a positive')
//     .integer(),
// });

export default function FormEnrollment({ match }) {
  const [mode, setMode] = useState('New');
  const [enrollment, setEnrollment] = useState([]);
  const [plans, setPlans] = useState([]);
  const [options, setOptions] = useState([]);
  const [planSelected, setPlanSelected] = useState();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState((0).toFixed(2));
  const [studentSelected, setStudentSelected] = useState();

  const history = useHistory();
  const { enrollmentID } = match.params;

  useMemo(async () => {
    const plan = await plans.filter(p => p.id === Number(planSelected));

    if (plan[0]) {
      const { duration, price } = plan[0];
      const newEndDate = addMonths(parseISO(startDate), duration);

      if (isValid(newEndDate)) {
        const formattedEndDate = format(newEndDate, 'dd/MM/yyyy');
        setEndDate(formattedEndDate);
      }

      const newTotalPrice = price * duration;

      setTotalPrice(newTotalPrice.toFixed(2));
    }
  }, [planSelected, startDate]);

  useEffect(async () => {
    async function loadPlans() {
      const planResponse = await api.get('plans');

      const planOptions = planResponse.data.map(plan => ({
        id: plan.id,
        title: plan.title,
      }));

      setPlans(planResponse.data);
      setOptions(planOptions);
    }

    async function loadEnrollment() {
      const { data } = await api.get('enrollment');

      const item = await data.filter(
        object => object.id === Number(enrollmentID)
      );

      console.log(item);

      setStudentSelected({
        id: Number(item[0].student.id),
        name: item[0].student.name,
      });

      setStartDate(format(parseISO(item[0].start_date), 'yyyy-MM-dd'));

      await setEnrollment(item[0]);
    }

    loadPlans();

    if (enrollmentID) {
      setMode('Edit');
      await loadEnrollment();
    }
  }, [match]);

  async function loadStudents(name) {
    const response = name
      ? await api.get('students', {
          params: {
            name,
          },
        })
      : await api.get('students');

    const students = response.data.map(student => ({
      id: student.id,
      name: student.name,
    }));

    return students;
  }

  const loadSelectedStudent = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(loadStudents(inputValue));
      }, 1000);
    });

  const loadAllStudents = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(loadStudents());
      }, 1000);
    });

  async function create(data) {
    const { student_id, start_date } = data;

    const studentID = Number(student_id);
    const planID = Number(planSelected);

    await api
      .post('enrollment', {
        start_date,
        student_id: studentID,
        plan_id: planID,
      })
      .then(() => {
        toast.success(`Success! Enrollment created.`, {
          autoClose: 5000,
        });

        history.push('/enrollments');
      })
      .catch(error => {
        throwError(error);
      });
  }

  async function edit(data) {
    const { student_id, start_date } = data;

    const studentID = Number(student_id);
    const planID = Number(planSelected);

    await api
      .put(`enrollment/${enrollmentID}`, {
        start_date,
        student_id: studentID,
        plan_id: planID,
      })
      .then(() => {
        toast.success(`Success! Enrollment updated.`, {
          autoClose: 5000,
        });

        history.push('/enrollments');
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
        {mode === 'New' ? (
          <h2>Enrollment Registration</h2>
        ) : (
          <h2>Enrollment edit</h2>
        )}

        <Link to="/enrollments/">
          <button type="button">BACK</button>
        </Link>
      </TitleBar>

      <Form onSubmit={handleSubmit}>
        <div>
          <strong>STUDENT</strong>
          <CustomAsyncSelect
            name="student_id"
            placeholder="Search student"
            cacheOptions
            loadOptions={loadSelectedStudent}
            options={loadAllStudents}
            defaultOptions
            defaultValue={studentSelected}
          />
        </div>

        <HorizontalInputs>
          <div>
            <strong>PLAN</strong>
            <select
              name="plan"
              onChange={e => setPlanSelected(e.target.value)}
              value={planSelected}
            >
              {options.map(p => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <strong>START DATE</strong>
            <Input
              name="start_date"
              onChange={e => setStartDate(e.target.value)}
              type="date"
              value={startDate}
            />
          </div>
          <div>
            <strong>END DATE</strong>
            <Input disabled value={endDate} name="end_date" type="text" />
          </div>
          <div>
            <strong>TOTAL PRICE</strong>
            <Input
              disabled
              name="totalPrice"
              value={totalPrice}
              step="0.01"
              type="number"
            />
          </div>
        </HorizontalInputs>

        <button type="submit">
          {mode === 'New' ? 'CREATE ENROLLMENT' : 'UPDATE ENROLLMENT'}
        </button>
      </Form>
    </Container>
  );
}
