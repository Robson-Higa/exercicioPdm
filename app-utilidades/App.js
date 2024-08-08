import { NavigationContainer } from '@react-navigation/native';
i//mport { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/pages/HomeScreen';
import ColorScreen from './src/pages/ColorScreen';
import FuelScreen from './src/pages/FuelScreen';
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
          component={ColorScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen 
          name="Fuel" 
          component={FuelScreen} 
          options={{ headerShown: true }}
        />

        <Stack.Screen 
          name="Schedule" 
          component={ScheduleScreen} 
          options={{ headerShown: true }}
        />

        <Stack.Screen 
          name="Sum" 
          component={SumScreen} 
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}