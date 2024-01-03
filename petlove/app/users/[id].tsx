import { Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const UserPage = () => {
    return(
        <View>
            <Text>User Page</Text>
            <Link href="/users/1">Go to user 1</Link>
        </View>
    );
};