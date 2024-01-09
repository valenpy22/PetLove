import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function Login () {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de inicio de sesión
    console.log('Login con:', username, password);
    // Aquí puedes integrar la lógica de autenticación, como una petición a un API
    router.push('/adoption');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PetLove</Text>
      <TextInput
        style={styles.input}
        placeholder="RUT"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    borderRadius: 20,
    paddingLeft: 20
  },
});
