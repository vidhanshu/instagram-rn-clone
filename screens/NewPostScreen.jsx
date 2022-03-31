import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import AddNewPost from "../components/newposts/AddNewPost";

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: "black",flex:1 }}>
      <StatusBar />
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;
