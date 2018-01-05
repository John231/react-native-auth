import React, { Component } from "react";
import { Button, Card, CardSection, Input } from "./common";
import firebase from "firebase";

class LoginForm extends Component {
  state = { email: "", password: "" };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
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

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Login </Button>
        </CardSection>
      </Card>
    );
  }
}
export default LoginForm;
