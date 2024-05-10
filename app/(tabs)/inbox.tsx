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
  const [cartItems, setCartItems] = useState([]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item !== product);
    setCartItems(updatedCart);
  };

  const handleGoBack = () => {
    setSelectedProduct(null);
  };
  
  return (
    <View style={styles.container}>
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
            <View key={index} style={styles.productContainer}>
              <TouchableOpacity onPress={() => handleSelectProduct(product)} style={styles.item}>
                <Text style={styles.productText}>{product}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAddToCart(product)} style={styles.cartButton}>
                <Text style={styles.cartButtonText}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}

      {selectedProduct && (
        <View style={styles.productView}>
          <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Volver</Text>
          </TouchableOpacity>
          <Text style={styles.selectedProductText}>{selectedProduct}</Text>
          <TouchableOpacity onPress={() => handleAddToCart(selectedProduct)} style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Carrito */}
      {cartItems.length > 0 && (
        <View style={styles.cartContainer}>
          <Text style={styles.cartTitle}>Carrito</Text>
          {cartItems.map((item, index) => (
            <Text key={index} style={styles.cartItem}>{item}</Text>
          ))}
          <TouchableOpacity onPress={() => setCartItems([])} style={styles.clearCartButton}>
            <Text style={styles.clearCartButtonText}>Vaciar carrito</Text>
          </TouchableOpacity>
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
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  cartButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  cartButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  productView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedProductText: {
    fontSize: 20,
  },
  cartContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  clearCartButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  clearCartButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default MenuScreen;
