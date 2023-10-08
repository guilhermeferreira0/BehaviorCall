import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import Moment from 'moment';
import * as Notify from 'expo-notifications';
import CalendarPicker from 'react-native-calendar-picker';
import styles from './styles';

import Bars from '../../components/bars';
import Tabs from '../../components/tabs'

function Schedule() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [type, setType] = useState('');
  const [initialDate, setInitialDate] = useState();
  const [endDate, setEndDate] = useState();

  Moment.updateLocale('br', {
    months : [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ],
    weekdays : [
      "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"
  ]
});

  function handleDate(day, typeDate) {
    if(typeDate === 'start') {
      setInitialDate(day);
    }
    else {
      setEndDate(day);
    }
  }

  async function handleCallNotification() {

    await Notify.scheduleNotificationAsync({
      content: {
        title: 'BehaviorCall',
        body: 'Bem vindo ao App :)',
        data: {},
      },
      trigger: {
        seconds: 3,
      }
    });
  }

  return(
    <View style={styles.container}>
      <Bars />

      <Text style={styles.title}>Calendário</Text>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.btnSelected}
          onPress={() => {
            setType('start')
            setOpenCalendar(true)
          }}
        >
          <Text style={{fontSize: 16, fontFamily: 'Oswald-Bold'}}>Selecione a data inicial: </Text>
        </TouchableOpacity>

        <Text style={styles.daySelected}>{Moment(initialDate).format('dddd, MMMM Do YYYY')}</Text>

      </View>

      <View style={styles.section}>
        <TouchableOpacity
          style={styles.btnSelected}
          onPress={() => {
            setType('end')
            setOpenCalendar(true)
          }}
        >
          <Text style={{fontSize: 16, fontFamily: 'Oswald-Bold'}}>Selecione a data final: </Text>
        </TouchableOpacity>

        <Text style={styles.daySelected}>{Moment(endDate).format('dddd, MMMM Do YYYY')}</Text>
      </View>

      <View style={styles.section}>
      <TouchableOpacity
          style={styles.notification}
          // eslint-disable-next-line
          onPress={handleCallNotification}
        >
          <Text style={{fontSize: 16, fontFamily: 'Oswald-Bold'}}>Notificações</Text>
        </TouchableOpacity>

      </View>

      <Modal visible={openCalendar}>
        <CalendarPicker
          style={styles.calendar}
          initialDate={new Date()}
          weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
          months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
          previousTitle="Anterior"
          nextTitle="Próximo"
          onDateChange={day => {
            handleDate(day, type);
            setOpenCalendar(false);
          }}
        />
      </Modal>

      <View style={styles.tabs}>
        <Tabs />
      </View>
    </View>

  );
}

export default Schedule;