import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

import backgroundImage from "../../assets/background.jpg";
class AuthSreen extends Component {
  loginHander = () => {
    startMainTabs();
  };
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.contianer}>
          <MainText>
            <HeadingText> Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground color="green">
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContianer}>
            <DefaultInput placeholder="USERNAME/E-MAIL" style={styles.input} />
            <DefaultInput placeholder="PASSWORD" style={styles.input} />
            <DefaultInput placeholder="CONFIRM PASSWORD" style={styles.input} />
          </View>
          <ButtonWithBackground color="green" onPress={this.loginHander}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContianer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthSreen;
