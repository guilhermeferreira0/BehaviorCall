import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal } from 'react-native';
import Moment from 'moment';
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

  return(
    <View style={styles.container}>
      <Bars />

      <TouchableOpacity
        onPress={() => {
          setType('start')
          setOpenCalendar(true)
        }}
      >
        <Text>Selecione a data inicial: </Text>
      </TouchableOpacity>

      <Text>{Moment(initialDate).format('dddd, MMMM Do YYYY')}</Text>

      <TouchableOpacity
        onPress={() => {
          setType('end')
          setOpenCalendar(true)
        }}
      >
        <Text>Selecione a data final: </Text>
      </TouchableOpacity>

      <Text>{Moment(endDate).format('dddd, MMMM Do YYYY')}</Text>

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


      <Tabs />
    </View>

  );
}

export default Schedule;