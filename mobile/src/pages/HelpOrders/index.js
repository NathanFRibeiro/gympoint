import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import { parseISO, formatRelative } from 'date-fns';

import {
  Container,
  OrderList,
  OrderItem,
  Status,
  OccurredAt,
  Question,
  Header,
  Empty,
  TextEmpty,
} from './styles';

import Button from '~/components/Button';
import api from '~/services/api';

export default function HelpOrders(props) {
  const userID = useSelector(state => state.auth.id);
  const [orders, setOrders] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  async function configureData(data) {
    const orderList = await data.map(order => ({
      ...order,
      dateFormatted: formatRelative(parseISO(order.created_at), new Date()),
      answered: !!order.answer_at,
    }));

    setOrders(orderList);
    setIsFetching(false);
  }

  async function getOrders() {
    await api
      .get(`students/${userID}/help-orders`)
      .then(response => {
        configureData(response.data);
      })
      .catch(error => {
        const message = error.response
          ? {
              title: 'Could not get your help orders!',
              subtitle: error.response.data.error,
            }
          : {
              title: 'Network error!',
              subtitle: 'Check your connection.',
            };

        Alert.alert(message.title, message.subtitle);
      });
  }

  useEffect(() => {
    getOrders();
  }, []);

  function handleOrder(id) {
    const { navigation } = props;

    const order = orders.find(o => o.id === id);

    navigation.navigate('Order', { order });
  }

  function handleNewOrder() {
    const { navigation } = props;
    navigation.navigate('NewOrder', { refreshItems: getOrders });
  }

  function onRefresh() {
    setIsFetching(true);
    getOrders();
  }

  return (
    <Container>
      <Button onPress={() => handleNewOrder()}>New Help Order</Button>

      <OrderList
        data={orders}
        ListEmptyComponent={
          <Empty>
            <TextEmpty>You don&apos;t have any help orders yet.</TextEmpty>
          </Empty>
        }
        keyExtractor={order => order.id}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => handleOrder(item.id)}>
            <OrderItem>
              <Header>
                <Status answered={item.answered}>
                  {item.answered ? 'Answered' : 'No reply'}
                </Status>
                <OccurredAt>{item.dateFormatted}</OccurredAt>
              </Header>
              <Question numberOfLines={3}>{item.question}</Question>
            </OrderItem>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
