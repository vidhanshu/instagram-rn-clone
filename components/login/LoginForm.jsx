import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
/* importing formik and yup for forms and validations */
import { Formik } from "formik";
import * as yup from "yup";
/* importing validator for validating email */
import validator from "email-validator";
/* importing firebase */
import{ firebase} from "../../firebase";
const LoginForm = ({ navigation }) => {
  /* schema for the validations */
  const LoginFormSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8, "Your password has to at least 8 characters long"),
  });
  /* onLogin function user will login through this*/
  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Successfully logged in 🥳", email, password);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "🔥 My lord...",
        error.message + "\n\n....What would you like to do next 👽!?",
        [
          {
            text: "OK",
            onPress: () => console.log("OK"),
            style: "cancel",
          },
          {
            text: "Sign Up",
            onPress: () => navigation.push("SignUp"),
            style: "default",
          },
        ]
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
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
              placeholder="Phone number, username or email"
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {/* for password input */}
            <TextInput
              placeholderTextColor="#444"
              autoCapitalize="none"
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
            {/* forgot password */}
            <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
              <Text style={{ color: "#3590F3" }}>Forgot password?</Text>
            </View>
            {/* submit button */}
            <TouchableOpacity
              style={styles.btn(isValid)}
              onPress={() => {
                handleSubmit();
              }}
              disabled={isValid ? false : true}
            >
              <Text style={styles.text}>Log in</Text>
              {/* button */}
            </TouchableOpacity>
            <Text style={{ marginVertical: 50, textAlign: "center" }}>
              <Text>Don't Have An Account? </Text>
              <Text
                style={{ color: "#3590F3" }}
                onPress={() => navigation.push("SignUp")}
              >
                Sign up
              </Text>
            </Text>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  //conditional styling for the button
  btn: (isValid) => ({
    backgroundColor: isValid ? "#3590F3" : "#D6D6D6",
    padding: 10,
    borderRadius: 5,
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
export default LoginForm;
