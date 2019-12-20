import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import { parseISO, formatRelative } from 'date-fns';

import {
  Container,
  CheckinList,
  CheckinItem,
  Title,
  OccurredAt,
} from './styles';

import Button from '~/components/Button';
import api from '~/services/api';

export default function Checkin() {
  const userID = useSelector(state => state.auth.id);
  const [checkins, setCheckins] = useState([]);

  async function configureData(data) {
    const checkinList = await data.reverse().map((checkin, idx) => ({
      ...checkin,
      title: `Check-In #${idx + 1}`,
      dateFormatted: formatRelative(parseISO(checkin.created_at), new Date()),
    }));

    setCheckins(checkinList.reverse());
  }

  async function getCheckins() {
    await api
      .get(`/students/${userID}/checkins`)
      .then(response => {
        configureData(response.data);
      })
      .catch(error => {
        const message = error.response
          ? {
              title: 'Could not get checkins!',
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
    getCheckins();
  }, []);

  async function handleCheckin() {
    await api
      .post(`/students/${userID}/checkins`)
      .then(async response => {
        await getCheckins(response.data);
      })
      .catch(error => {
        const message = error.response
          ? {
              title: 'Check-in error!',
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
      <Button onPress={() => handleCheckin()}>New Check-In</Button>
      <CheckinList
        data={checkins}
        keyExtractor={checkin => checkin.id}
        renderItem={({ item }) => (
          <CheckinItem key={item.id}>
            <Title>{item.title}</Title>
            <OccurredAt>{item.dateFormatted}</OccurredAt>
          </CheckinItem>
        )}
      />
    </Container>
  );
}
