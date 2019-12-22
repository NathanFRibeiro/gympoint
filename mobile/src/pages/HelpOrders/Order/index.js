import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  OrderItem,
  OccurredAt,
  Question,
  Answer,
  Header,
  Title,
} from './styles';

export default function Order(props) {
  const { order } = props.navigation.state.params;

  return (
    <Container>
      {order && (
        <OrderItem>
          <Header>
            <Title>QUESTION</Title>
            <OccurredAt>{order.dateFormatted}</OccurredAt>
          </Header>
          <Question>{order.question}</Question>
          <Title>ANSWER</Title>
          <Answer unanswered={!order.answered}>
            {order.answered
              ? order.answer
              : 'This question has not been answered yet. Come back soon!'}
          </Answer>
        </OrderItem>
      )}
    </Container>
  );
}

Order.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
