import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native'

import { styles } from './style';
  
  export default function ScheduleScreen() {

    const schedules = {
        Segunda: ['18:50 - 21:05 Eng. Software II', '21:15 - 22:45 Rede de Computadores II'],
        Terça: ['18:05 - 21:05 CPW IV', '21:15 - 22:45 Rede de Computadores II'],
        Quarta: ['19:35 - 22:45 LP III'],
        Quinta: ['18:50 - 21:05 Sistemas Operacionais I', '21:15 - 22:45 PDM I'],
        Sexta: ['18:50 - 20:20 PDM I'],
      };

    const [selectedDay, setSelectedDay] = useState('Segunda');
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tela de Horário do 4 Período TSI</Text>
        <Picker
          selectedValue={selectedDay}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}
        >
          {Object.keys(schedules).map((day) => (
            <Picker.Item key={day} label={day} value={day} />
          ))}
        </Picker>
        <View style={styles.scheduleContainer}>
          {schedules[selectedDay].map((schedule, index) => (
            <Text key={index} style={styles.scheduleItem}>{schedule}</Text>
          ))}
        </View>
      </View>
    );
};
  