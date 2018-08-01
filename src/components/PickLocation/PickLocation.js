import React, { Component } from "react";
import { View, Image, Button, StyleSheet, Text } from "react-native";

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.contianer}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
        <View style={styles.button}>
          <Button title="Locate Me" onPress={() => alert("Pick Location")} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  }
});
export default PickLocation;
