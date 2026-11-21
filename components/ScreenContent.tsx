import React from 'react';
import { Text, View } from 'react-native';

interface ScreenContentProps {
  title: string;
}

export const ScreenContent: React.FC<ScreenContentProps> = ({ title }) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
    </View>
  );
};

//como pro tip para mantener el orden del cóodigo en lugar de escribir los estilos de tailwind
//Para cada componente dentro de un return, creamos una variable styles que va a almacenar los estilos de tailwind
//que se van a usar a lo largo del código, util tambien para reutilizar codigo
const styles={
  title: `text-xl font-bold`,
  container: `flex-1 items-center justify-center bg-white padding-4 px-4`
}
