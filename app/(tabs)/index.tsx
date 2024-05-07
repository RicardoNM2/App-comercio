import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const ImagenRepetida = () => {
  // Definir la URL de la imagen
  const imageUrl = 'https://mcdonalds.es/api/cms/images/mcdonalds-es/ZjS3JUMTzAJOCg4C_FLASH_WEB_CARD_MCFLURRY.jpg?auto=format,compress';

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Repetir la imagen cinco veces */}
      {[...Array(5)].map((_, index) => (
        <TouchableOpacity key={index} onPress={() => console.log('Image Pressed')}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingVertical: 20, // Espacio en la parte superior e inferior del ScrollView
    paddingHorizontal: 10, // Espacio en los lados del ScrollView
  },
  imageContainer: {
    marginBottom: 20, // Espacio entre las imágenes
    borderWidth: 1, // Añadir un borde para visualización
    borderColor: '#ccc', // Color del borde
    borderRadius: 10, // Radio del borde
    overflow: 'hidden', // Para que las imágenes no salgan del borde redondeado
  },
  image: {
    width: '100%',
    height: 200, // Altura de cada imagen
  },
});

export default ImagenRepetida;
