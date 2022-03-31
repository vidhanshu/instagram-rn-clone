import React, { useEffect, useState } from "react";

import { SignedInStack, SignedOutStack } from "./Navigation";

import { firebase } from "../firebase";

const AuthNavigation = () => {
  const [currentUser, setcurrentUser] = useState(null);

  const userHandler = (user) =>
    user ? setcurrentUser(user) : setcurrentUser(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
