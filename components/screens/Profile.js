import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Perfil de {global.username}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
  global.username = null;
  navigation.navigate("Login");
}}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
