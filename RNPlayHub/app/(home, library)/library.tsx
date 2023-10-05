import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Library = () => {
    const router = useRouter();
	return (
		<View>
			<Text>Library</Text>
            <Link href="(library)/details"><View style={{ width: 24, height: 24, backgroundColor: "salmon" }} /></Link>
            <TouchableOpacity onPress={() => router.push("/details")}><View style={{ width: 24, height: 24, backgroundColor: "crimson" }} /></TouchableOpacity>
		</View>
	);
};

export default Library;
