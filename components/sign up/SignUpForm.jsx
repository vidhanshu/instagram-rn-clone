import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import validator from "email-validator";
/* importing firebase */
import { firebase, db } from "../../firebase";

const SignUpForm = ({ navigation }) => {
  /* sign up schema for validation */
  const SignUpFormSchema = yup.object().shape({
    username: yup
      .string()
      .required()
      .min(2, "Username should have minimum length 2"),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8, "Your password has to at least 8 characters long"),
  });

  /* get random profile picture */
  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };

  /* sign up function */
  const signUp = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("Account Created successfully!");
      
      db.collection("users")
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilePicture(),
        });
      navigation.navigate("SignIn");
    } catch (error) {
      /* beautiful alert box */
      Alert.alert(
        "🔥 My lord...",
        error.message + "\n....What would you like to do next 👽!?",
        [
          {
            text: "OK",
            onPress: () => console.log("OK"),
            style: "cancel",
          },
          {
            text: "Log in",
            onPress: () => navigation.push("Login"),
            style: "destructive",
          },
        ]
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(values) => {
          signUp(values.email, values.password, values.username);
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextInput
              style={[
                styles.input,
                {
                  //this is for email border to make it red if the email is invalid
                  borderColor:
                    values.username.length < 1 || values.username.length > 2
                      ? "#D6D6D6"
                      : "red",
                  //this just to make it's width larger so that red border will appear properly
                  borderWidth:
                    values.email.length < 1 || validator.validate(values.email)
                      ? 0.9
                      : 1.5,
                },
              ]}
              placeholder="Username"
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="ascii-capable"
              textContentType="username"
              autoFocus={false}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            {/* for email input */}
            <TextInput
              style={[
                styles.input,
                {
                  //this is for email border to make it red if the email is invalid
                  borderColor:
                    values.email.length < 1 || validator.validate(values.email)
                      ? "#D6D6D6"
                      : "red",
                  //this just to make it's width larger so that red border will appear properly
                  borderWidth:
                    values.email.length < 1 || validator.validate(values.email)
                      ? 0.9
                      : 1.5,
                },
              ]}
              placeholder="Phone number or email"
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={false}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {/* for password input */}
            <TextInput
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="Password"
              textContentType="password"
              autoCorrect={false}
              style={[
                styles.input,
                {
                  //this is for password border to make it red if the password is invalid
                  borderColor:
                    values.password.length >= 8 || values.password.length < 2
                      ? "#D6D6D6"
                      : "red",
                  //this just to make it's width larger so that red border will appear properly
                  borderWidth:
                    values.email.length < 1 || validator.validate(values.email)
                      ? 0.9
                      : 1.5,
                },
              ]}
              placeholder="Password"
              // password security
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {/* submit button */}
            <TouchableOpacity
              style={styles.btn(isValid)}
              onPress={() => {
                handleSubmit();
              }}
              disabled={isValid ? false : true}
            >
              <Text style={styles.text}>Sign up</Text>
            </TouchableOpacity>
            <Text style={{ marginVertical: 50, textAlign: "center" }}>
              <Text>Already Have An Account? </Text>
              <Text
                style={{ color: "#3590F3" }}
                onPress={() => navigation.navigate("Login")}
              >
                Log in
              </Text>
            </Text>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: (isValid) => ({
    backgroundColor: isValid ? "#3590F3" : "#D6D6D6",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  }),
  text: { color: "white", fontWeight: "bold", textAlign: "center" },
  input: {
    borderWidth: 0.9,
    borderColor: "#D6D6D6",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
});
export default SignUpForm;
