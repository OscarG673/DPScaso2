import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function SignUp()  {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://192.168.0.7:3000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password, name: name, email: email })
      });
      const data = await response.json();
      if (data.error) {
        alert(data.message);
      } else {
        global.username = username; // establece el valor de global.username
        alert("Usuario registrado exitosamente.");
        navigation.navigate("Main");
      }
    } catch (error) {
      console.log(error);
      alert("Error al registrar el usuario. Intente nuevamente más tarde.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <View style={styles.form}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Ingresa tu usuario"
        />
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Ingresa tu nombre completo"
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Ingresa tu correo"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Registrarme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#70FECD",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  form: {
    width: 260,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 22,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 2.5,
    borderColor: "#708CFE",
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#4A45B7",
    margin:10,
     borderRadius:18,
    justifyContent: "center",
     width:190,
    height:50,

  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

});
