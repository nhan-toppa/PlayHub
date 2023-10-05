import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Profile = () => {
    const router = useRouter();
	return (
		<View>
			<Text>Profile</Text>
            <Link href="/details">Details</Link>
            <TouchableOpacity onPress={() => router.push("/details")}><Text>Details</Text></TouchableOpacity>
		</View>
	);
};

export default Profile;
