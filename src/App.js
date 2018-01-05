import firebase from "firebase";
import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: false };

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
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
export default App;
