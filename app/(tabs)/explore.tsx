import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const categories = {
  'Hamburguesas': ['Big Mac', 'Cheeseburger'],
  'Complementos': ['Patatas Fritas', 'Nuggets'],
  'Bebidas': ['Coca-Cola', 'Sprite'],
  'Postres': ['Sundae', 'Apple Pie']
};

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
    }
  };

  const handleGoBack = () => {
    setSelectedProduct(null);
  };

  return (
    <View style={styles.container}>
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
          <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Agregar al Carrito</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Carrito</Text>
        <ScrollView style={styles.cartItems}>
          {cart.map((item, index) => (
            <Text key={index} style={styles.cartItem}>{item}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  },
  addToCartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  addToCartButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  cartContainer: {
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    padding: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItems: {
    maxHeight: 150,
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MenuScreen;
