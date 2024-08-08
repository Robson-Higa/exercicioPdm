
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Utilidades</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Color')}
      >
        <Text style={styles.buttonText}>Seleciona Cor</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Fuel')}
      >
        <Text style={styles.buttonText}>Calcular Combustivel</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Schedule')}
      >
        <Text style={styles.buttonText}>Ver Horário</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Sum')}
      >
        <Text style={styles.buttonText}>Somar</Text>
      </TouchableOpacity>

    </View>
  )
}

