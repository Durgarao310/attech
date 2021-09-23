import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import {Dimensions} from 'react-native';
const { width,height} = Dimensions.get('window');

export default Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  return (
      <View style={styles.container}>
          <View style={styles.header_containder}>
              <Text style={styles.title}>Register with Attech</Text>
              <Text style={styles.subtitle}>Securly store your learing progress.</Text>
          </View>
          <View style={styles.input_container}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              style={styles.input}
            />
             
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_text}>Register</Text>
            </TouchableOpacity>
          </View>
      </View>
  )
};

const styles = StyleSheet.create({

  container: {
    minHeight:"100%",
    width:"100%",
  },
  input: {
    width:"80%",
    alignSelf:"center",
    borderWidth:1,
    padding: width/40,
    marginVertical:height/50,
    borderRadius:height/50

  },
  input_container:{
    marginTop:"10%"
  },
  header_containder:{
    
  },
  title:{
    textAlign:"center",
    marginTop:height/15,
    fontSize:24,
  },
  subtitle:{
    textAlign:"center",
    fontSize:18,
    color:"#000",
    opacity:0.5,
    marginTop:"2%"
  },
  btn:{
    width:"80%",
    height:height/15,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    borderRadius:height/50,
    marginVertical:height/50,

    
  },
  btn_text:{
    color:"#fff",
    fontSize:18
  }


});
