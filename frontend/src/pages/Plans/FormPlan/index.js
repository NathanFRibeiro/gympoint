import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { Container, TitleBar, HorizontalInputs } from './styles';

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

  useEffect(() => {
    const { planID } = match.params;

    if (planID) {
      setMode('Edit');
      // Get plan and fill the form
    }
  }, [match]);

  return (
    <Container>
      <TitleBar>
        {mode === 'New' ? <h2>Plan Registration</h2> : <h2>Plan name</h2>}

        <Link to="/students/">
          <button type="button">BACK</button>
        </Link>
      </TitleBar>

      <Form schema={schema}>
        <div>
          <strong>TITLE</strong>
          <Input name="title" type="text" />
        </div>

        <HorizontalInputs>
          <div>
            <strong>DURATION (MONTHS) </strong>
            <Input name="duration" type="number" />
          </div>
          <div>
            <strong>PRICE /MO</strong>
            <Input
              name="price"
              step="0.01"
              type="number"
              placeholder="U$ 99.00"
            />
          </div>
          <div>
            <strong>TOTAL PRICE</strong>
            <Input
              disabled
              name="totalPrice"
              step="0.01"
              type="number"
              placeholder="U$ 198.00"
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
