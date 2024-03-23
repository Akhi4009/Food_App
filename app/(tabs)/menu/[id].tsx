import products from '@/assets/data/products';
import Button from '@/components/Button';
import { useCart } from '@/provider/CartProvider';
import {  PizzaSize } from '@/types';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const sizes:PizzaSize[] = ['S', 'M', 'L', 'XL'];
const ProductDetailsScreen = () => {

  const [selectedsize,setSelectedsize] = useState<PizzaSize>('M');
  const { addItem } = useCart()
    const {id} = useLocalSearchParams();

    const product = products.find((p) => p.id.toString() === id);

    const addToCart = () => {
      if(!product) return;
      addItem(product,selectedsize)  
    }
    if(!product) {
      return <Text> Product not found </Text>
    }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product.name}}/>
      <Image source={{uri:product.image}} style={styles.image}/> 
      
      <Text>Select Sizes:</Text>
      <View style={styles.sizes}>
        {sizes.map(size =>
        <Pressable
          onPress={()=>{
            setSelectedsize(size)
          }}
          key={size}
          style={[styles.size,
          {backgroundColor:selectedsize === size ? 'gainsboro' : 'white'}]}
           >
          <Text style={[styles.sizeText, {color: selectedsize === size ? 'black': 'gray'}]}>{size}</Text>
        </Pressable> 
          )}
        
      </View>
      
      <Text style={styles.price}>Price: ${product.price}</Text>
      <Button   onPress={addToCart} text='Add to cart'/>
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
    marginTop:'auto'
  },
  sizes:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
  },
  size:{
    backgroundColor:'gainsboro',
    width:50,
    aspectRatio:1,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  sizeText:{
    fontSize:20,
    fontWeight:'500'
  }
})