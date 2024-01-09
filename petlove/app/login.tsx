import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, StatusBar, Pressable, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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
      <Text style={styles.hola}>Hola!</Text>
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
      <Pressable style={styles.iniciar}>
        <Text style={styles.textoiniciar}>Iniciar Sesión</Text>
      </Pressable>
      <Text style={styles.olvidaste}>¿Olvidaste tu clave?</Text>
      <Pressable style={styles.invitado}>
        <Text style={{color:"#FFFFFF", fontWeight: '700'}}>Entrar como Invitado</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 100,
    color: "#FF7979"
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10
  },
  iniciar: {
    backgroundColor: "#FF7979",
    borderRadius: 10,
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  textoiniciar: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 'bold',
  },
  hola: {
    fontWeight:'500', 
    fontSize:20, 
    color: "#FF7979",
    marginBottom: 10,
    width: 300
  },
  olvidaste: {
    width: 300,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
    textAlign: 'right',
    color: "#FF7979"
  },
  invitado: {
    backgroundColor: "#00AAAA",
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 40
  }
});
