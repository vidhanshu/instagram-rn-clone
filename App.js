import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AuthNavigation from "./screens/AuthNavigation";
const App = () => {
  return (
    <View style={styles.container}>
     <AuthNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingBottom: 0,
  },
});
export default App;
