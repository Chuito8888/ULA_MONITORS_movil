import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//El archivo App.tsx va a ser como nuestro main por así decirlo
//El Screencontent se puede usar para mostrar lo que se verá en la app al principio, obviamente lo que está en código ahora se va a cambiar
//La carpeta components llevará todos los componentes que vayamos a utilizar
//La carpeta Hooks llevará todos los hooks que vayamos a utilizar
//Es posible que se cree una nueva carpeta para las pantallas usando navigate (o lo que sería el equivalente de las rutas en web)
export default function App() {
  return (
    <SafeAreaProvider>
      <ScreenContent title="Esto es un ejemplo para que el proyecto se vea 'en blanco'" />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
