import React,{useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from "react-native";
import Header from "../components/home/header/Header";
import Posts from "../components/home/post/Posts";
import BottomTabs from "../components/home/bottomtabs/BottomTabs";
import Stories from "../components/home/story/Stories";
import {firebase,db} from "../firebase"

const HomeScreen = ({ navigation }) => {

  // useEffect(()=>{
  //   db.collectionGroup("posts").onSnapshot(snapshot=>{
  //     console.log(snapshot.docs.map(doc=>doc.data()))
  //   })
  // },[])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <BottomTabs navigation={navigation} />
      <Header navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Stories />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex:1,
  },
  //fix-issue-of-not-able-to-see-last-post-comments
  scrollView: {
    marginBottom: 50,
  },
  white: {
    color: "white",
  },
});
export default HomeScreen;
