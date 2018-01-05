import React, { Component } from "react";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
  state = { text: "" };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.text}
            label="Email"
            onChangeText={text => this.setState({ text })}
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
