import products from '@/assets/data/products';
import { Stack, useLocalSearchParams } from 'expo-router';

import { Image, StyleSheet, Text, View } from 'react-native';

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  
  if(!product) {
      return <Text> Product not found </Text>
    }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product.name}}/>
      <Image source={{uri:product.image}} style={styles.image}/> 
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
     </View>
  )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    padding:10,
  },
  image:{
    width:'100%',
    aspectRatio:1,
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
  },
  title:{
    fontSize:20,
  }
 
})