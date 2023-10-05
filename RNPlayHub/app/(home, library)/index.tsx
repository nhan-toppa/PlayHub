import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useTheme } from "../../contexts/ThemeContext";

export default function Home() {
	const router = useRouter();
	const { theme } = useTheme();
	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app! {theme}</Text>
			<Link href={"/details"}>Details</Link>
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
