import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import validUrl from "valid-url";

/* importing firebase */
import { firebase, db } from "../../firebase";

const uploadPostSchema = yup.object().shape({
  name: yup.string().url("A URL is required").required("A URL is required"),
  caption: yup.string().max(220, "caption has reached the character limit"),
});

const PLACEHOLDER_URL =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_URL);
  const [currentLoggedInUser, setcurrentLoggedInUser] = useState(null);

  const getUsername = () => {
    
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot(snapshot =>
        snapshot.docs.map(doc => {
          setcurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };

  useEffect(() => {
    getUsername();
  }, []);

  const uploadPostToFireBase = (imageUrl, caption) => {
    const unsubscribe = db
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection("posts")
      .add({
        imgUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      })
      .then(() => {navigation.goBack();alert("apple")});
      return unsubscribe
  };
  return (
    <Formik
      initialValues={{ caption: "", imgUrl: "" }}
      onSubmit={(values) => {
        uploadPostToFireBase(values.imgUrl, values.caption);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={styles.formHeader}>
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACEHOLDER_URL,
              }}
              style={styles.img}
            />
            <View style={styles.caption}>
              <TextInput
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                style={styles.caption_text}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <TextInput
            placeholder="Enter image url..."
            placeholderTextColor="gray"
            style={styles.imgUrl}
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            onChangeText={handleChange("imgUrl")}
            onBlur={handleBlur("imgUrl")}
            value={values.imgUrl}
          />
          {errors.caption && (
            <Text style={{ color: "red", padding: 10 }}>{errors.caption}</Text>
          )}
          {errors.imgUrl && (
            <Text style={{ color: "red", padding: 10 }}>{errors.imgUrl}</Text>
          )}
          <Button
            onPress={() => {
              handleSubmit();
              navigation.navigate("Home");
            }}
            disabled={isValid}
            title="share"
          ></Button>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formHeader: {
    margin: 20,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  caption: {
    flex: 1,
  },
  caption_text: {
    fontSize: 20,
    color: "white",
  },
  imgUrl: {
    color: "white",
    fontSize: 18,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default FormikPostUploader;
