import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const ListaPerfil = () => {
  // Función para abrir las URL, aquí puedes añadir las URL que desees para cada elemento de la lista
  const abrirURL = (url) => {
    Linking.openURL(url); // Esto abre la URL en el navegador predeterminado del dispositivo
  };
  return (
    <ScrollView>
      <View style={styles.container}>
       <View style={styles.encabezadoContainer}>
        <View style={styles.textoContainer}>
          <Text style={styles.textoEncabezado}>Mas</Text>
        </View>
        <View style={styles.imagenContainer}>
          <Image
            source={require('../../assets/images/mcdondalds-profile.png')} // Ruta de la imagen para el encabezado
            style={styles.imagenEncabezado}
          />
        </View>
      </View>
      <View style={styles.listaContainer}>
        <TouchableOpacity onPress={() => abrirURL('https://mcdonalds.es/restaurantes')}>
          <Text style={styles.item}>Restaurantes</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => abrirURL('https://mcdonalds.es/descargas/mymcdonalds')}>
          <Text style={styles.item}>Mi cuenta</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => abrirURL('https://mcdonalds.es/contacto')}>
          <Text style={styles.item}>Atención al cliente</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => abrirURL('https://mcdonalds.es/empresa/sala-de-prensa')}>
          <Text style={styles.item}>Premios</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => abrirURL('https://empleo.mcdonalds.es/')}>
          <Text style={styles.item}>Trabaja con nosotros</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => abrirURL('https://mcdonalds.es/descargas/mymcdonalds')}>
          <Text style={styles.item}>Mis códigos</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => abrirURL('https://mcdonalds.es/documentos/legal-app')}>
          <Text style={styles.item}>Términos y condiciones</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity onPress={() => abrirURL('https://mcdonalds.es/documentos/documento-legal')}>
          <Text style={styles.item}>Política de privacidad</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  encabezadoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textoContainer: {
    flex: 1,
    marginLeft:50
  },
  icon: {
    marginLeft: 10, // Margen derecho entre el icono y el texto
  },
  textoEncabezado: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagenContainer: {
    width: 150,
    height: 150,
  },
  imagenEncabezado: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  encabezado: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50, // Ajusta el tamaño de la imagen según tus necesidades
    height: 50,
  },
  listaContainer: {
    marginTop: 50, // Ajusta el margen según el tamaño de tu imagen de encabezado
  },
  item: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  separator: {
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
});

export default ListaPerfil;
