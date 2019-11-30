import React from 'react';

import {
  Container,
  OrderItem,
  OccurredAt,
  Question,
  Answer,
  Header,
  Title,
} from './styles';

export default function Order() {
  return (
    <Container>
      <OrderItem>
        <Header>
          <Title>QUESTION</Title>
          <OccurredAt>Today at 9</OccurredAt>
        </Header>
        <Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          consequat nisl et suscipit consequat. Nulla facilisi. Proin quis purus
          eget erat convallis elementum in sit amet nisi. Nam erat massa,
          ultricies sit amet diam ac, varius cursus neque. Aenean commodo
          pulvinar volutpat. Vivamus venenatis metus nec vulputate gravida.
          Donec faucibus ipsum est, at sagittis nibh bibendum ut.
        </Answer>
        <Title>ANSWER</Title>
        <Question>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          consequat nisl et suscipit consequat. Nulla facilisi. Proin quis purus
          eget erat convallis elementum in sit amet nisi. Nam erat massa,
          ultricies sit amet diam ac, varius cursus neque. Aenean commodo
          pulvinar volutpat. Vivamus venenatis metus nec vulputate gravida.
          Donec faucibus ipsum est, at sagittis nibh bibendum ut. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Phasellus consequat nisl
          et suscipit consequat. Nulla facilisi. Proin quis purus eget erat
          convallis elementum in sit amet nisi. Nam erat massa, ultricies sit
          amet diam ac, varius cursus neque. Aenean commodo pulvinar volutpat.
          Vivamus venenatis metus nec vulputate gravida. Donec faucibus ipsum
          est, at sagittis nibh bibendum ut.
        </Question>
      </OrderItem>
    </Container>
  );
}
