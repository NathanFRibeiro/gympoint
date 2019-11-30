import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  Container,
  OrderList,
  OrderItem,
  Status,
  OccurredAt,
  Question,
  Header,
} from './styles';
import Button from '~/components/Button';

const checkins = [
  {
    id: '1',
    answered: false,
    title: 'Checkin number #1',
    date: 'Today at 9',
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dictum ante. Donec vulputate non est vel congue. Suspendisse sit amet tellus vitae felis feugiat congue. In mollis sollicitudin purus vel semper. Phasellus in nisl pretium, bibendum nibh et, pellentesque metus. Vestibulum vulputate orci vel vehicula rutrum. Suspendisse quis convallis velit. Ut vitae tincidunt dolor. Mauris feugiat viverra neque, quis commodo dolor facilisis eu. Suspendisse eget consequat orci, sit amet placerat tellus. Curabitur vulputate nibh eget mi bibendum commodo. Nulla egestas orci vel ligula interdum placerat. Fusce tincidunt aliquam urna vel molestie.',
  },
  {
    id: '2',
    answered: true,
    title: 'Checkin number #1',
    date: 'Today at 9',
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dictum ante. Donec vulputate non est vel congue. Suspendisse sit amet tellus vitae felis feugiat congue. In mollis sollicitudin purus vel semper. Phasellus in nisl pretium, bibendum nibh et, pellentesque metus. Vestibulum vulputate orci vel vehicula rutrum. Suspendisse quis convallis velit. Ut vitae tincidunt dolor. Mauris feugiat viverra neque, quis commodo dolor facilisis eu. Suspendisse eget consequat orci, sit amet placerat tellus. Curabitur vulputate nibh eget mi bibendum commodo. Nulla egestas orci vel ligula interdum placerat. Fusce tincidunt aliquam urna vel molestie.',
  },
  {
    id: '3',
    answered: false,
    title: 'Checkin number #1',
    date: 'Today at 9',
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dictum ante. Donec vulputate non est vel congue. Suspendisse sit amet tellus vitae felis feugiat congue. In mollis sollicitudin purus vel semper. Phasellus in nisl pretium, bibendum nibh et, pellentesque metus. Vestibulum vulputate orci vel vehicula rutrum. Suspendisse quis convallis velit. Ut vitae tincidunt dolor. Mauris feugiat viverra neque, quis commodo dolor facilisis eu. Suspendisse eget consequat orci, sit amet placerat tellus. Curabitur vulputate nibh eget mi bibendum commodo. Nulla egestas orci vel ligula interdum placerat. Fusce tincidunt aliquam urna vel molestie.',
  },
  {
    id: '4',
    answered: true,
    title: 'Checkin number #1',
    date: 'Today at 9',
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dictum ante. Donec vulputate non est vel congue. Suspendisse sit amet tellus vitae felis feugiat congue. In mollis sollicitudin purus vel semper. Phasellus in nisl pretium, bibendum nibh et, pellentesque metus. Vestibulum vulputate orci vel vehicula rutrum. Suspendisse quis convallis velit. Ut vitae tincidunt dolor. Mauris feugiat viverra neque, quis commodo dolor facilisis eu. Suspendisse eget consequat orci, sit amet placerat tellus. Curabitur vulputate nibh eget mi bibendum commodo. Nulla egestas orci vel ligula interdum placerat. Fusce tincidunt aliquam urna vel molestie.',
  },
];

export default function HelpOrders(props) {
  function handleOrder() {
    const { navigation } = props;
    navigation.navigate('Order');
  }

  function handleNewOrder() {
    const { navigation } = props;
    navigation.navigate('NewOrder');
  }

  return (
    <Container>
      <Button onPress={() => handleNewOrder()}>New Help Order</Button>
      <OrderList
        data={checkins}
        keyExtractor={checkin => checkin.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOrder()}>
            <OrderItem key={item.id}>
              <Header>
                <Status answered={item.answered}>
                  {item.answered ? 'Answered' : 'No reply'}
                </Status>
                <OccurredAt>{item.date}</OccurredAt>
              </Header>
              <Question numberOfLines={3}>{item.question}</Question>
            </OrderItem>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
