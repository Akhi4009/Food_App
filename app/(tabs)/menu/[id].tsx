import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


const ProductDetailsScreen = () => {

    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text style={{fontSize: 20}}>ProductDetailsScreen for id: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({})