import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaRegIdCard } from 'react-icons/fa';
import { MdAttachMoney, MdQuestionAnswer, MdPeople } from 'react-icons/md';

import { Container, Panel } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Panel>
        <Link to="/students">
          <div>
            <MdPeople size={70} color="#f1f1f1" />
            <span>STUDENTS</span>
          </div>
        </Link>
        <Link to="/plans">
          <div>
            <MdAttachMoney size={70} color="#f1f1f1" />
            <span>PLANS</span>
          </div>
        </Link>

        <Link to="/enrollments">
          <div>
            <FaRegIdCard size={70} color="#f1f1f1" />
            <span>ENROLLMENTS</span>
          </div>
        </Link>

        <Link to="/helporders">
          <div>
            <MdQuestionAnswer size={70} color="#f1f1f1" />
            <span>HELP ORDERS</span>
          </div>
        </Link>
      </Panel>
    </Container>
  );
}
