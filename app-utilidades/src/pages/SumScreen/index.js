import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function SomaScreen() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const somar = () => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      if (!isNaN(number1) && !isNaN(number2)) {
        setResult(number1 + number2);
      } else {
        setResult('Não é um número');
      }
    };

    const limpar = () => {
      setNum1('');
      setNum2('');
      setResult('');
    };
  
  return (
    <View style={styles.container}>
      <Text styl={styles.title}>Tela Somar</Text>

      <TextInput
        style={styles.input}
        value={num1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        value={num2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        onChangeText={setNum2}
      />

      <TouchableOpacity style={styles.buttonCalcular} onPress={() => somar()}>
        <Text style={styles.textButtonClear}>Calcular</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCalcular} onPress={() => limpar()}>
        <Text style={styles.textButtonClear}>Limpar</Text>
      </TouchableOpacity>
    <Text style={styles.result}>Resultado: {result}</Text>
    </View>
    
  );
}

