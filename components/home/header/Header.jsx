import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ComponentDivider from "../../global/Divider";

/* importing firebase */

import {firebase} from "../../../firebase"


const handleSignOut = async () =>{
  try{
     await firebase.auth().signOut();
     console.log("Signed out successfully 🥳");
  }
  catch(error){
    console.log(error.message);
  }
}

const Header = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut}>
          <Image
            style={styles.logo}
            source={require("../../../assets/ig.png")}
          />
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.push("Post")}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ComponentDivider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  logo: {
    width: 110,
    height: 60,
    resizeMode: "contain",
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 3,
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    width: 20,
    borderRadius: 10,
    zIndex: 1,
    right: 0,
    top: -2,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
    fontSize: 10,
  },
});
export default Header;
