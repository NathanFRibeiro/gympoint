import React, { useState } from 'react';
import { MdQuestionAnswer } from 'react-icons/md';
import ReactModal from 'react-modal';

import { Container, TitleBar, OrdersTable, ContentModal } from './styles';

export default function HelpOrders() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
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
            <tr>
              <td>Nathan Ribeiro</td>
              <td>
                <button onClick={() => handleClick()} type="button">
                  <MdQuestionAnswer size={16} color="#fff" />
                </button>
              </td>
            </tr>
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
              height: '350px',
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
            <strong>STUDENT QUESTION</strong>
            <p>
              Olá pessoal da academia, gostaria de saber se quando acordar devo
              ingerir batata doce e frango logo de primeira, preparar as
              marmitas e lotar a geladeira? Dou um pico de insulina e jogo o
              hipercalórico?
            </p>
            <strong>YOUR ANSWER</strong>
            <textarea />
            <button onClick={() => handleClick()} type="button">
              ANSWER
            </button>
          </ContentModal>
        </ReactModal>
      </Container>
    </>
  );
}
