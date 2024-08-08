import { View, Text } from 'react-native';

import { styles } from './style';

export default function FuelScreen() {

  const [alcool, setAlcool] = useState(0); 
  const [gasolina, setGasolina] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {
    let res = Number(alcool) / Number(gasolina);
    
    console.log(res);

    if (res <= 0.7) {
      setResultado("Vá de Álcool!")
    } else {
      setResultado("Vá de Gasosa!")
    }
  }

  function limpar() {
    setAlcool(0);
    setGasolina(0);
    setResultado('');
  }
    


  return (
    <View style={styles.container}>
      <Text styl={styles.title}>Tela de Calcular</Text>
    

      
      <TextInput 
        style={styles.input} 
        placeholder="Preço (R$) do litro do Álcool"
        value={alcool == 0 ? '' : alcool}
        onChangeText={(v) => setAlcool(v)}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Preço (R$) do litro do Gasolina" 
        value={gasolina == 0 ? '' : gasolina}
        onChangeText={(v) => setGasolina(v)}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Resultado" 
        editable={false}
        value={resultado == 0 ? '' : resultado}
      />

     
      <TouchableOpacity style={styles.buttonCalcular} onPress={() => calcular()}>
        <Text style={styles.textButtonClear}>Calcular</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.buttonClear} onPress={() => limpar()}>
        <Text style={styles.textButtonClear}>Limpar</Text>
      </TouchableOpacity>
      
    </View>
  );
}
