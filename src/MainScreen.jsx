import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";

// import cat2 from "../img/cat2"
const MainSreen = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.cta}>
        <Image
          style={{
            width: 200,
            height: 100,
            position: "relative",
            top: "45%",
            right: "-20%",
            marginBottom: 10,
          }}
          source={require("../img/cat1.png")}
        />
        <Text
          style={{
            marginTop: 100,
            fontSize: 19,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Welcome to Catdev Inc. Software Solution
        </Text>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("Forms")}
        >
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 300,
  },
  text: {
    color: "red",
  },
  cta: {
    position: "absolute",
  },
  btn: {
    borderColor: "#000",
    padding: 7,
    alignItems: "center",
    width: 80,
    right: "-35%",
    top: 24,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});

export default MainSreen;
