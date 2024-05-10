import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const categories = {
  'Hamburguesas': ['Big Mac', 'Cheeseburger'],
  'Complementos': ['Patatas Fritas', 'Nuggets'],
  'Bebidas': ['Coca-Cola', 'Sprite'],
  'Postres': ['Sundae', 'Apple Pie']
};

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleGoBack = () => {
    setSelectedProduct(null);
  };
  
  return (
    <View style={styles.container}>
      {/* Encabezado con imagen */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/productos-mac.jpg')} // Ruta de la imagen para el encabezado
          style={styles.image}
        />
      </View>

      {/* Menú */}
      {!selectedCategory && (
        <ScrollView style={styles.scrollView}>
          {Object.keys(categories).map((category, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectCategory(category)} style={styles.item}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {selectedCategory && !selectedProduct && (
        <ScrollView style={styles.scrollView}>
          <TouchableOpacity onPress={() => setSelectedCategory(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
          {categories[selectedCategory].map((product, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelectProduct(product)} style={styles.item}>
              <Text style={styles.productText}>{product}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {selectedProduct && (
        <View style={styles.productView}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
          <Text style={styles.selectedProductText}>{selectedProduct}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2', // Color de fondo del encabezado
    paddingVertical: 20,
  },
  image: {
    width: 400,
    height: 220,
    resizeMode: 'cover',
  },
  headerImage: {
    width: 300, // Ajusta el ancho de la imagen según tus necesidades
    height: 200, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'contain', // Ajusta el modo de redimensionamiento según tus necesidades
  },
  scrollView: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  categoryText: {
    fontSize: 18,
  },
  productText: {
    fontSize: 16,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  productView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedProductText: {
    fontSize: 20,
  }
});

export default MenuScreen;
