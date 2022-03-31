import { Image, View, Text, StyleSheet } from "react-native";
import { POSTS } from "../../../data/constants";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostImage from "./PostImage";
import ComponentDivider from "../../global/Divider";
const Posts = () => {
  return (
    <View style={styles.container}>
      {POSTS.map((e, idx) => (
        <View key={idx} style={styles.post}>
          <ComponentDivider />
          <PostHeader user={e.user} profile_picture={e.profile_picture} />
          <PostImage image={e.imageURL} />
          <PostFooter post={e} />
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({});

export default Posts;
