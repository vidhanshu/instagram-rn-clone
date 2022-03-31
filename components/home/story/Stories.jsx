import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Story from "./Story";
import { STORIES } from "../../../data/constants";
const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {STORIES.map((e, idx) => (
          <Story key={idx} user={e.user} image={e.image} owner={e.owner} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  txt: {
    color: "white",
  },
});
export default Stories;
