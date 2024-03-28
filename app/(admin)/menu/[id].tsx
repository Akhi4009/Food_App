import products from '@/assets/data/products';
import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { Link, Stack, useLocalSearchParams } from 'expo-router';

import { Image, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';

const ProductDetailsScreen = () => {
  const {id} = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  const colorScheme = useColorScheme();

  
  
  if(!product) {
      return <Text> Product not found </Text>
    }
  return (
    <View style={styles.container}>
       <Stack.Screen  
              options={{
                title:'Menu',
                headerRight: () => (
                  <Link href={`/(admin)/menu/create?id=${id}`} asChild>
                    <Pressable>
                      {({ pressed }) => (
                        <FontAwesome
                          name="pencil"
                          size={25}
                          color={Colors[colorScheme ?? 'light'].text}
                          style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                      )}
                    </Pressable>
                  </Link>
                )
                }}/>
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