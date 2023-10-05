import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
            <TouchableOpacity onPress={() => router.push("/details")}><Text>Details</Text></TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
