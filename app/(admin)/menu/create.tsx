import Button from '@/components/Button'
import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function CreateProductScreen() {

  const onCreate = () => {
    console.warn('Creating Product')
  };
  return (
    <View style={styles.container}>
    <Text style={styles.label}>Name</Text>
    <TextInput placeholder='Name' style={styles.input}/>
    <Text style={styles.label}>Price ($)</Text>
    <TextInput 
      placeholder='9.99' 
      style={styles.input}
      keyboardType="numeric"
      />
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
