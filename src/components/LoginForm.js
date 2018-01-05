import React, { Component } from "react";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
  state = { email: "" };
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
        <CardSection />
        <CardSection>
          <Button> Login </Button>
        </CardSection>
      </Card>
    );
  }
}
export default LoginForm;
