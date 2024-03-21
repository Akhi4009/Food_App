import Colors from '@/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Product } from '@/types';


const ProductListItem = ({product}:{product:Product}) => {
  return(
    <View style={styles.container}>
      <Image 
        source={{uri:product.image}}
        style={styles.image}
        />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
   backgroundColor:'white',
   padding: 10,
   borderRadius: 20,
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