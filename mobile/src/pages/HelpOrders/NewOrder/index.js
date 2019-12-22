import React, { useState } from 'react';
import { Alert } from 'react-native';

import { useSelector } from 'react-redux';
import { Container } from './styles';
import MultilineInput from '~/components/MultilineInput';
import Button from '~/components/Button';
import api from '~/services/api';

export default function NewOrder(props) {
  const userID = useSelector(state => state.auth.id);
  const [order, setOrder] = useState('');

  async function handleBack() {
    const { refreshItems } = props.navigation.state.params;
    if (typeof refreshItems === 'function') {
      await refreshItems();

      props.navigation.goBack();
    }
  }

  async function handleSubmit() {
    await api
      .post(`/students/${userID}/help-orders`, { question: order })
      .then(() => {
        Alert.alert('Sent!', 'Soon your questions will be answered!', [
          { text: 'OK', onPress: () => handleBack() },
        ]);
      })
      .catch(error => {
        const message = error.response
          ? {
              title: 'Order error!',
              subtitle: error.response.data.error,
            }
          : {
              title: 'Network error!',
              subtitle: 'Check your connection.',
            };

        Alert.alert(message.title, message.subtitle);
      });
  }

  return (
    <Container>
      <MultilineInput
        value={order}
        onChangeText={setOrder}
        placeholder="Type your help order"
        multiline
      />
      <Button onPress={() => handleSubmit()}>Send</Button>
    </Container>
  );
}
