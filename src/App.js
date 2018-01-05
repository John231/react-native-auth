import firebase from "firebase";
import React, { Component } from "react";
import { View, Text } from "react-native";
import { Header } from "./components/common";

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyBcGI5__NFNfowzaJG342Hgo1tfN3HWYzY",
      authDomain: "authentication-78410.firebaseapp.com",
      databaseURL: "https://authentication-78410.firebaseio.com",
      projectId: "authentication-78410",
      storageBucket: "authentication-78410.appspot.com",
      messagingSenderId: "227583138901"
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}
export default App;
