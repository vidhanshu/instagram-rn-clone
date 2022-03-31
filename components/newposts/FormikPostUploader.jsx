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


/* schema for the uploading posts */

const uploadPostSchema = yup.object().shape({
  name: yup.string().url("A URL is required").required("A URL is required"),
  caption: yup.string().max(220, "caption has reached the character limit"),
});


/* dummy page  */
const PLACEHOLDER_URL =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

const FormikPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_URL);
  const [currentLoggedInUser, setcurrentLoggedInUser] = useState({});

  const getUsername = () => {
    const user = firebase.auth().currentUser;

    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot(
        (snapshot) =>
          setcurrentLoggedInUser({
            username: snapshot.docs[0].data().username,
            profilePicture: snapshot.docs[0].data().profile_picture,
          })
      );

    return unsubscribe;
  };

  useEffect(() => {
    getUsername();
    console.log(currentLoggedInUser);
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
        owner_email:firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users: [],
        comments: [],
      })
      .then(() => {
        navigation.goBack();
      });
    return unsubscribe;
  };
  return (
    <Formik
      validationSchema={uploadPostSchema}
      // validateOnMount={true}
      initialValues={{ caption: "", imgUrl: "" }}
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
          <TouchableOpacity
            style={styles.btn(validUrl.isUri(thumbnailUrl))}
            // cz onSubmit isn't working
            onPress={() => {
              uploadPostToFireBase(values.imgUrl, values.caption);
            }}
            disabled={
              validUrl.isUri(thumbnailUrl)
                ? false
                : true
            }
          >
            <Text style={styles.text}>Share</Text>
          </TouchableOpacity>
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
    padding: 20,
  },
  btn: (isValid) => ({
    backgroundColor: isValid ? "#3590F3" : "#D6D6D6",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  }),
  text: { color: "white", fontWeight: "bold", textAlign: "center" },
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
