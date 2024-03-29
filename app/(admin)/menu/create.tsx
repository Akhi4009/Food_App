import Button from '@/components/Button'
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { defauPizzImage } from '@/components/ProductListItem';
import Colors from '@/constants/Colors';
import { Stack, useLocalSearchParams } from 'expo-router';
import { coolDownAsync } from 'expo-web-browser';

function CreateProductScreen() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const {id} = useLocalSearchParams();

  const isUpdating = !!id;

  const resetFields = () => {
    setName('');
    setPrice('');
    setImage(null);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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

  const onUpdate = () => {
    if(!validateInput()){
      return;
    }

    console.warn('Updating Product');
  }

  const onSubmit = () => { 
    if(isUpdating){
      onUpdate();
    }else{
      onCreate();
    }
  }

  const onDelete = () => {
    console.warn('Delete...')
  }

  const onConfirmDelete = () => {
    Alert.alert('Confirm', 'Are you sure you want to delete this product',[
      {
        text: 'Cancel'
      },
      {
        text: 'Delete',
        style:'destructive',
        onPress: onDelete,
      }
    ]);
  }
  
  
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: isUpdating ? 'Update Product' :'Create Product'}}/>
      <Image source={{ uri: image || defauPizzImage }} style={styles.image} resizeMode='contain'  />
      <Text style={styles.textButton} onPress={pickImage}>Select Image</Text>
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
      <Button onPress={onSubmit} text={isUpdating ? 'Update' :'Create'}/>
      {isUpdating && <Text onPress={onConfirmDelete} style={styles.textButton}>Delete</Text>}
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

    },
    image:{
      width:'50%',
      aspectRatio:1,
      alignSelf:'center',
    },
    textButton:{
      alignSelf:'center',
      fontWeight:'bold',
      color:Colors.light.tint,
      marginVertical:10
    }
})

export default CreateProductScreen
