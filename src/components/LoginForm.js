import firebase from "firebase";
import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress() {
    this.setState({ error: "", loading: "true" });
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
      )
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }
  onLoginSuccess() {
    this.setState({ email: "", password: "", error: "", loading: false });
  }
  onLoginFail() {
    this.setState({ error: "Authentication Failed", loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}> Login </Button>;
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
        <CardSection>{this.renderButton()}</CardSection>
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
