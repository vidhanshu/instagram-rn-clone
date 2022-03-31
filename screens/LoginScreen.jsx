import { View, Text, StyleSheet, Image,ScrollView } from "react-native";
import React from "react";
import LoginForm from "../components/login/LoginForm";
const INSTAGRAM_LOGO =
  "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";
const LoginScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO,height:100,width:100}} />
      </View>
      <LoginForm navigation={navigation} />
      {/* Login form */}
    </ScrollView>
  );
};

const styles= StyleSheet.create({
    container:{
        flex:3,
        backgroundColor:'white',
        paddingTop:20,
        paddingHorizontal:12
    },
    logoContainer:{
        alignItems:"center",
        marginVertical:60,
    }
})
export default LoginScreen;
