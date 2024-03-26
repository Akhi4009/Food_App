import Button from '@/components/Button'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function CreateProductScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const resetFields = () => {
    setName('');
    setPrice('');
  }

  const validateInput = () => {
    setError('');
    if(!name){
      setError('Name is required');
      return false
    }
    if(!price){
      setError('Price is required');
      return false;
    }
    if(isNaN(parseFloat(price))){
      setError('Price is not a number');
      return false
    }
    return true;
  }

  const onCreate = () => {
    if(!validateInput()){
      return;
    }
    console.warn('Creating Product',name,price);
    resetFields();
  };
  return (
    <View style={styles.container}>
    <Text style={styles.label}>Name</Text>
    <TextInput
     placeholder='Name' 
     style={styles.input}
     value={name}
     onChangeText={setName}
    />
    <Text style={styles.label}>Price ($)</Text>
    <TextInput 
      placeholder='9.99' 
      style={styles.input}
      keyboardType="numeric"
      value={price}
      onChangeText={setPrice}
      />
      <Text style={{color:'red'}}>{error}</Text>
      <Button onPress={onCreate} text='Create'/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    label:{
      color:'gray',
      fontSize:16
    },
    input:{
      backgroundColor:'white',
      padding:10,
      borderRadius:5,
      marginTop:5,
      marginBottom:20

    }
})

export default CreateProductScreen