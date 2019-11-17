import React, { useState, useEffect, useMemo } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, TitleBar, HorizontalInputs } from './styles';
import api from '~/services/api';
import throwError from '~/services/error';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  duration: Yup.number()
    .typeError('Insert a valid number')
    .required('Duration is required')
    .positive('This value should be a positive'),
  price: Yup.number()
    .typeError('Insert a valid number')
    .required('Price is required')
    .positive('This value should be a positive'),
});

export default function FormPrice({ match }) {
  const [mode, setMode] = useState('New');
  const [plan, setPlan] = useState([]);
  const [price, setPrice] = useState((0).toFixed(2));
  const [duration, setDuration] = useState(0);
  const history = useHistory();
  const { planID } = match.params;

  const totalPrice = useMemo(() => {
    return (price * duration).toFixed(2);
  }, [price, duration]);

  useEffect(() => {
    async function loadPlan() {
      const { data } = await api.get('plans');

      const item = await data.filter(object => object.id === Number(planID))[0];

      setPlan(item);
      setPrice(item.price);
      setDuration(item.duration);
    }

    if (planID) {
      loadPlan();
      setMode('Edit');
    }
  }, [match]);

  async function create(data) {
    const { title } = data;

    await api
      .post('plans', {
        title,
        duration,
        price,
      })
      .then(() => {
        toast.success(`Success! Plan created.`, {
          autoClose: 5000,
        });

        history.push('/plans');
      })
      .catch(error => {
        throwError(error);
      });
  }

  async function edit(data) {
    const { title } = data;

    await api
      .put(`plans/${planID}`, {
        title,
        duration,
        price,
      })
      .then(() => {
        toast.success(`Success! Plan updated.`, {
          autoClose: 5000,
        });
        history.push('/plans');
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
        {mode === 'New' ? <h2>Plan Registration</h2> : <h2>Plan name</h2>}

        <Link to="/plans/">
          <button type="button">BACK</button>
        </Link>
      </TitleBar>

      <Form initialData={plan} schema={schema} onSubmit={handleSubmit}>
        <div>
          <strong>TITLE</strong>
          <Input name="title" type="text" />
        </div>

        <HorizontalInputs>
          <div>
            <strong>DURATION (MONTHS) </strong>
            <Input
              name="duration"
              type="number"
              min="0"
              onChange={e => setDuration(e.target.value)}
            />
          </div>
          <div>
            <strong>PRICE /MO</strong>
            <Input
              name="price"
              step="00.01"
              min="0"
              type="number"
              placeholder="U$ 99.00"
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div>
            <strong>TOTAL PRICE</strong>
            <Input
              disabled
              name="totalPrice"
              step="0.01"
              type="number"
              value={totalPrice}
            />
          </div>
        </HorizontalInputs>

        <button type="submit">
          {mode === 'New' ? 'CREATE PLAN' : 'UPDATE PLAN'}
        </button>
      </Form>
    </Container>
  );
}
