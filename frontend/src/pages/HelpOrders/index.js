import React, { useState, useEffect } from 'react';
import { MdQuestionAnswer } from 'react-icons/md';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';

import { Container, TitleBar, OrdersTable, ContentModal } from './styles';
import api from '~/services/api';
import throwError from '~/services/error';

export default function HelpOrders() {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [answer, setAnswer] = useState('');
  const [notAnswer, setNotAnswer] = useState(false);

  async function loadOrders() {
    await api
      .get('help-orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        throwError(error);
      });
  }

  useEffect(() => {
    loadOrders();
  }, []);

  async function handleClick(id) {
    const item = await orders.find(o => o.id === id);

    await setSelectedOrder(item);

    setShowModal(true);
  }

  async function handleSubmit() {
    if (answer !== '') {
      setNotAnswer(false);
      await api
        .put(`help-orders/${selectedOrder.id}`, {
          answer,
        })
        .then(() => {
          toast.success('Success! The answer has been sent!');
          loadOrders();
        })
        .catch(error => {
          throwError(error);
        });
    } else {
      return setNotAnswer(true);
    }
    return setShowModal(false);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <Container>
        <TitleBar>
          <h2>Help Orders</h2>
        </TitleBar>

        <OrdersTable>
          <thead>
            <tr>
              <th>STUDENT</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <center>No help order registered.</center>
            ) : (
              orders.map(order => (
                <tr key={order.id}>
                  <td>{order.student.name}</td>
                  <td>
                    <button onClick={() => handleClick(order.id)} type="button">
                      <MdQuestionAnswer size={16} color="#fff" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </OrdersTable>
        <ReactModal
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: 'rgb(1,1,1,0.4)',
            },
            content: {
              width: '450px',
              height: '400px',
              position: 'absolute',
              top: '40px',
              left: '35%',
            },
          }}
          isOpen={showModal}
          onRequestClose={() => handleClose()}
          shouldCloseOnOverlayClick
        >
          <ContentModal>
            <div>
              <strong>STUDENT QUESTION</strong>
              <p>{selectedOrder.question}</p>
            </div>
            <div>
              <strong>YOUR ANSWER</strong>
              {notAnswer && (
                <span>Please, write an answer to this question.</span>
              )}
              <textarea onChange={e => setAnswer(e.target.value)} />
              <button onClick={() => handleSubmit()} type="button">
                ANSWER
              </button>
            </div>
          </ContentModal>
        </ReactModal>
      </Container>
    </>
  );
}
