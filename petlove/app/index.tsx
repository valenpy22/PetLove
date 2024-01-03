import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router";
import React from "react";

const HomePage = () => {
    return(
        <View>
            <Text>User Page</Text>
            <Link href="/users/1">Go to user 1</Link>
            <Pressable onPress={() => router.push("/users/2")}>
              <Text>Go to user 2</Text>
            </Pressable>
        </View>
    );
};

export default HomePage;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
