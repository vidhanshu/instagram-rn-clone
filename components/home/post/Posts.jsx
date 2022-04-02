import { Image, View, Text, StyleSheet } from "react-native";
import { POSTS } from "../../../data/constants";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PostImage from "./PostImage";
import ComponentDivider from "../../global/Divider";
import React, { useState, useEffect } from "react";
import { db, firebase } from "../../../firebase";
import NoPosts from "./NoPosts";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup("posts").orderBy('createdAt',"desc").onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data()));
      setPosts(snapshot.docs.map((post) => ({ id: post.id, ...post.data() })));
    });
  }, []);

  return (
    <View style={styles.container}>
      {posts.length ? (
        posts.map((e, idx) => (
          <View key={idx} style={styles.post}>
            <ComponentDivider />
            <PostHeader user={e.user} profile_picture={e.profile_picture} />
            <PostImage image={e.imgUrl} />
            <PostFooter post={e} />
          </View>
        ))
      ) : (
        <NoPosts />
      )}
    </View>
  );
};
const styles = StyleSheet.create({});

export default Posts;
