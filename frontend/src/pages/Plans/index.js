import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container, TitleBar, PlanTable } from './styles';
import api from '~/services/api';
import throwError from '~/services/error';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  const history = useHistory();

  async function loadPlans() {
    await api
      .get('plans')
      .then(response => {
        setPlans(response.data);
      })
      .catch(error => {
        throwError(error);
      });
  }

  useEffect(() => {
    loadPlans();
  }, []);

  async function handleDelete(id) {
    await api
      .delete(`plans/${id}`)
      .then(() => {
        toast.success(`Success! Plan deleted.`, {
          autoClose: 5000,
        });
      })
      .catch(error => {
        throwError(error);
      });

    loadPlans();
  }

  function handleEdit(planID) {
    history.push(`/plans/${planID}`);
  }

  return (
    <Container>
      <TitleBar>
        <h2>Plan Management</h2>
        <aside>
          <Link to="/plans/new">
            <button type="button">
              <FaPlus /> New Plan
            </button>
          </Link>
        </aside>
      </TitleBar>

      <PlanTable>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>DURATION</th>
            <th>PRICE /mo</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr>
              <td>{plan.title}</td>
              <td>
                {plan.duration} {plan.duration !== 1 ? 'months' : 'month'}
              </td>
              <td>U$ {plan.price}</td>
              <td>
                <div>
                  <button onClick={() => handleEdit(plan.id)} type="button">
                    <FaEdit size={16} color="#fff" />
                  </button>
                  <button
                    onClick={() => {
                      window.confirm(
                        'Are you sure you wish to delete this plan?'
                      ) && handleDelete(plan.id);
                    }}
                    type="button"
                  >
                    <FaTrash size={16} color="#fff" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </PlanTable>
    </Container>
  );
}
