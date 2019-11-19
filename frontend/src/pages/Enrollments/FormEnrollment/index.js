/* eslint-disable camelcase */
import React, { useState, useEffect, useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';
import { parseISO, addMonths, format, isValid } from 'date-fns';
import { toast } from 'react-toastify';
import AsyncSelect from 'react-select/async';
import { Container, TitleBar, HorizontalInputs } from './styles';
import api from '~/services/api';
import throwError from '~/services/error';

export default function FormEnrollment({ match }) {
  const [mode, setMode] = useState('New');
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [studentSelected, setStudentSelected] = useState();
  const [planSelected, setPlanSelected] = useState();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPrice, setTotalPrice] = useState((0).toFixed(2));
  const [options, setOptions] = useState([]);
  const [fieldsAreValid, setFieldsAreValid] = useState(true);

  const history = useHistory();

  async function loadCalculatedFields() {
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
  }

  async function loadEnrollment() {
    await api
      .get(`enrollment/${match.params.enrollmentID}`)
      .then(async response => {
        if (response.data) {
          setStudentSelected(response.data[0].student.id);
          setStartDate(
            format(parseISO(response.data[0].start_date), 'yyyy-MM-dd')
          );
          setPlanSelected(response.data[0].plan.id);
          loadCalculatedFields();
        }
      });
  }

  useMemo(async () => {
    loadCalculatedFields();
  }, [planSelected, startDate]);

  useEffect(() => {
    async function loadStudents() {
      await api
        .get('students')
        .then(response => {
          const formattedStudents = response.data.map(e => ({
            value: e.id,
            label: e.name,
          }));

          setStudents(formattedStudents);
        })
        .catch(error => throwError(error));
    }

    async function loadPlans() {
      const planResponse = await api.get('plans');

      const planOptions = planResponse.data.map(plan => ({
        id: plan.id,
        title: plan.title,
      }));

      setPlans(planResponse.data);
      setOptions(planOptions);
    }

    loadStudents();
    loadPlans();

    if (match.params.enrollmentID) {
      setMode('Edit');
      setTimeout(() => {
        loadEnrollment();
      }, 200);
    }
  }, []);

  /**
   * Async Select functions
   *
   */

  const filterStudents = inputValue => {
    return students.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptionsStudent = (inputValue, callback) => {
    callback(filterStudents(inputValue));
  };

  /**
   * Submit functions: create and edit
   * *
   */

  async function create(data) {
    const { start_date } = data;

    const studentID = Number(studentSelected);
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
    const { start_date } = data;

    const studentID = Number(studentSelected);
    const planID = Number(planSelected);

    await api
      .put(`enrollment/${match.params.enrollmentID}`, {
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
    const { start_date } = data;
    setFieldsAreValid(true);

    if (!studentSelected || !planSelected || start_date === '') {
      return setFieldsAreValid(false);
    }

    return mode === 'New' ? create(data) : edit(data);
  }

  return (
    <Container>
      <TitleBar>
        {mode === 'New' ? <h2>New enrollment</h2> : <h2>Edit Enrollment</h2>}

        <Link to="/enrollments/">
          <button type="button">BACK</button>
        </Link>
      </TitleBar>

      <Form onSubmit={handleSubmit}>
        <div>
          <strong>STUDENT</strong>
          <AsyncSelect
            name="student_id"
            classNamePrefix="react-select"
            cacheOptions
            loadOptions={loadOptionsStudent}
            defaultOptions={students}
            placeholder="Select a student"
            onChange={option => setStudentSelected(option.value)}
            value={students.filter(option => option.value === studentSelected)}
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
              <option value="-1">Select a plan</option>
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
        {!fieldsAreValid && <span> Attention! All fields are required.</span>}
      </Form>
    </Container>
  );
}
