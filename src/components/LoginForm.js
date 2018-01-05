import firebase from "firebase";
import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "" };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: "" });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
      )
      .catch(() => this.setState({ error: "Authentication Failed" }));
  }

  render() {
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            label="Email"
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
        <Text style={errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
