import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { Product } from '@/types';
import { Link, useSegments } from 'expo-router';

export const defauPizzImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"


const ProductListItem = ({product}:{product:Product}) => {

  const segments = useSegments();


   // Check if segments[0] and product.id are defined before constructing href
   
    const res = segments[0] === "(admin)" ? '(admin)' :'(user)';
  
  return(
    <Link href={`/${res}/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      <Image 
        source={{uri:product.image || defauPizzImage}}
        style={styles.image}
        resizeMode='contain'
        />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
    </Link>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
   backgroundColor:'white',
   padding: 10,
   borderRadius: 20,
   flex:1,
   maxWidth:'50%'
  },
  image:{
    width:'100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical:10
  },
  price: {
    color:Colors.light.tint,
    fontWeight:'bold'
    
  }
});