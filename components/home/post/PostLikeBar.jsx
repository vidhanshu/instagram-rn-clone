import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const PostLikeContainer = ({ handleLike, likeStatus }) => {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={handleLike}>
          <Image
            style={styles.icon}
            source={{
              uri: !likeStatus
                ? "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png"
                : "https://img.icons8.com/color/344/filled-like.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/comments.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/send--v1.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bookmark_container}>
        <TouchableOpacity>
          <Image
            style={styles.icon_right}
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  icon_right: {
    width: 28,
    height: 28,
  },
  likeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default PostLikeContainer;
