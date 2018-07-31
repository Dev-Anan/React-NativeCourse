import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
class AuthSreen extends Component {
  loginHander = () => {
    startMainTabs();
  };
  render() {
    return (
      <View>
        <Text> Auth Sreen</Text>
        <Button title="Login" onPress={this.loginHander} />
      </View>
    );
  }
}

export default AuthSreen;
