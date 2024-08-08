import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './scr/pages/HomeScreen';
import ColorScreen from './src/pages/ColorScreen';
import FuelScreen from './scr/pages/FuelScreen';
import ScheduleScreen from './src/pages/ScheduleScreen';
import SumScreen from './src/pages/SumScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Color" 
          component={ICQScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="Fuel" 
          component={IMCScreen} 
          options={{ headerShown: true }}
        />

        <Stack.Screen 
          name="Schedule" 
          component={IMCScreen} 
          options={{ headerShown: true }}
        />

        <Stack.Screen 
          name="Sum" 
          component={IMCScreen} 
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}