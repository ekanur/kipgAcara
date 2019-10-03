import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

class App extends Component{
  render(){
    return (
      <ImageBackground
      style={styles.backgroundImage}
      source={{uri:"https://source.unsplash.com/random"}}
    >
      <Text style={styles.appName}>KIPG APPS</Text>
      <Image
      style={{
        height:120,
        width:120,
        marginTop:70,
        alignSelf:"center"
      }}
      source={{uri:"http://placehold.jp/100x100.png"}}></Image>
      <Text
      style={{
        textAlign:"center",
        color:"#FFFFFF",
        fontWeight:"300",
        fontSize:14,
        marginTop:100,
      }}
      >
      PT. PETROKIMIA PUTRA GRESIK, T.bk
      </Text>
      <View
        style={{
          marginTop:20,
          width:"100%",
          marginBottom:10,
          backgroundColor:"white",
          padding:10,
        }}
      >
      
      <Text
      style={{
        fontSize:16,
        lineHeight:22,
        color:"#cecece"
      }}>
        KIPGs Est ullamco in duis nulla labore laboris labore dolor voluptate exercitation officia voluptate culpa.
        </Text>  
        <View
        style={{
          marginTop:20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom:5,
        }}>
          <TouchableOpacity onPress={this.handlPress}>
            <Text style={styles.button}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlPress}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover'
  },
  appName:{
    fontWeight:"bold",
    fontSize:30,
    color:"#FFFFFF",
    textAlign:"center",
    marginTop:90,
    fontFamily:"Helvetica"
  },
  button: {
    backgroundColor: '#F6A038',
    borderRadius: 6,
    color: 'white',
    fontSize: 16,
    overflow: 'hidden',
    paddingHorizontal: 18,
    paddingVertical:10,
    textAlign:'center',
  },
});

export default App;
