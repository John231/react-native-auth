import firebase from "firebase";
import React, { Component } from "react";
import { View } from "react-native";
import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

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
  styles = {
    containerStyle: {
      height: 100,
      justifyContent: "space-around"
    }
  };
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}> Log out </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={this.styles.containerStyle}>
            <Spinner />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;
