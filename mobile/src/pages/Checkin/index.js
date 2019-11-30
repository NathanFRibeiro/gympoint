import React from 'react';

import {
  Container,
  CheckinList,
  CheckinItem,
  Title,
  OccurredAt,
} from './styles';
import Button from '~/components/Button';

const checkins = [
  { id: '1', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '2', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '3', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '4', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '5', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '6', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '7', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '8', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '9', title: 'Checkin number #1', date: 'Today at 9' },
  { id: '10', title: 'Checkin number #1', date: 'Today at 9' },
];

export default function Checkin() {
  return (
    <Container>
      <Button>New Check-In</Button>
      <CheckinList
        data={checkins}
        keyExtractor={checkin => checkin.id}
        renderItem={({ item }) => (
          <CheckinItem key={item.id}>
            <Title>{item.title}</Title>
            <OccurredAt>{item.date}</OccurredAt>
          </CheckinItem>
        )}
      />
    </Container>
  );
}
