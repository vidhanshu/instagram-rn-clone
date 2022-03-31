import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React,{useState} from "react";
import PostLikeBar from "./PostLikeBar";
const PostFooter = ({ post }) => {
  const { likes, caption, user } = post;
  return (
    <View style={styles.container}>
      <PostLikeBar />
      <Text style={styles.likes}>{likes} likes</Text>
      <Caption caption={caption} user={user} />
      <CommentsSection  post={post} />
      <Comments post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 3,
  },
  likes: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 5,
  },
  caption: {
    marginBottom: 5,
  },
  caption_text: {
    color: "white",
    fontSize: 12,
    marginLeft: 10,
  },
  user: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
  CommentsSection: {
    color: "rgba(255,255,255,0.8)",
    marginBottom:5
  },
  Comments:{
    marginBottom:5
  }
});

const Caption = ({ user, caption }) => {
  return (
    <Text style={styles.caption}>
      <Text style={styles.user}>{user} </Text>
      <Text style={styles.caption_text}>{caption}</Text>
    </Text>
  );
};

// A) 0 comments 👉 Don't render the component
// B) 1 comment 👉 render component without "all" and singular "comment"
// C) 2 or more comments render with "all" and plural "comments"

//in the conditional render dont write directly like this: post.comment.length bcz it will be 1 or 0 or any positive integer & since it is not inside "Text" component it will give an error so instead write complete comparison. or you can use double negation 🥳 like this :

const CommentsSection = ({ post }) => {
  return (
    <>
      {!!post.comments.length && (
        <Text style={styles.CommentsSection}>
          View {post.comments.length > 1 ? "all" : null} {post.comments.length}{" "}
          {post.comments.length > 1 ? "comments" : "comment"}
        </Text>
      )}
    </>
  );
};

const Comments = ({ post }) => {
  return (
    <View style={styles.Comments}>
      {post.comments.map((comment,idx) => (
          <Text key={idx} style={{marginBottom:5}}>
            <Text style={styles.user}>{comment.user} </Text>
            <Text style={styles.caption_text}>{comment.comment}</Text>
          </Text>
      ))}
    </View>
  );
};
export default PostFooter;
