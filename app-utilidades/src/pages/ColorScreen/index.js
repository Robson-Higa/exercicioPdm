import { useState } from "react";
import { View, Text, TouchableOpacity} from 'react-native';

import { styles } from './style';

export default function ColorScreen() {
    const [color, setColor] = useState('#FFFFFF'); 

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

    
    return (
      <View style={styles.container}>
        <Text styl={styles.title}>Tela Selecionar Cor</Text>
        <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => handleColorChange('blue')}
        >
          <Text style={styles.buttonText}>Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => handleColorChange('red')}
        >
          <Text style={styles.buttonText}>Red</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: 'gray' }]}
          onPress={() => handleColorChange('gray')}
        >
          <Text style={styles.buttonText}>Gray</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      
    );
  }