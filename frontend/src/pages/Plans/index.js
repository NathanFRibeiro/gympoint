import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

import { Container, TitleBar, PlanTable } from './styles';

export default function Plans() {
  const history = useHistory();

  function handleDelete() {
    console.log('deleted');
  }

  function handleEdit(planID) {
    history.push(`/plans/${planID}`);
  }

  return (
    <Container>
      <TitleBar>
        <h2>Plan Management</h2>
        <aside>
          <Link to="/plan/new">
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
          <tr>
            <td>Start</td>
            <td>1 month</td>
            <td>U$129,90</td>
            <td>
              <div>
                <button onClick={() => handleEdit(1)} type="button">
                  <FaEdit size={16} color="#fff" />
                </button>
                <button
                  onClick={() => {
                    window.confirm(
                      'Are you sure you wish to delete this plan?'
                    ) && handleDelete();
                  }}
                  type="button"
                >
                  <FaTrash size={16} color="#fff" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </PlanTable>
    </Container>
  );
}
