import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { BOTTOM_TAB_ICONS } from "../../../data/constants";
import ComponentDivider from "../../global/Divider";
/**
 *
 * logic:
 * basically we here having a state 'activeTab' having the name of the current active tab and each of the icon is having an onPress event on which when user clicks the state got changed to the name of that particular icon and thus causing a rerender with the new 'activeTab' value
 *
 */
const BottomTabs = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <View style={styles.container}>
      <ComponentDivider />
      <View style={styles.BottomTabs}>
        {BOTTOM_TAB_ICONS.map((e, idx) => (
          <TouchableOpacity
            onPress={() => {
              setActiveTab(e.name);
            }}
            key={idx}
          >
            {/* dynamic images */}
            <Image
              style={[
                styles.icon,
                e.name === "Profile" ? styles.profileStyle(activeTab) : null,
              ]}
              source={{ uri: activeTab === e.name ? e.active : e.inactive }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "black",
    zIndex: 1000,
    width: "100%",
  },
  BottomTabs: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  //you can have functions as an object like this and using this you can create dynamic styling
  profileStyle: (active = "") => ({
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: active === "Profile" ? "white" : "transparent",
  }),
});
export default BottomTabs;
