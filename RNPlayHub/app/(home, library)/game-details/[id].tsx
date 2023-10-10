import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import { COLORS, SPACING, data } from "../../../constants";
import { useLocalSearchParams } from "expo-router";
import NotFound from "../../../components/game-details/NotFound";
import { Feather } from "@expo/vector-icons";

const Details = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const item = data.games.find((game) => game.id === Number(id));

	if (!item) return <NotFound />;
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.gameInfo}>
				<Image source={{ uri: item.url }} style={styles.banner} />
				<View style={styles.textContainer}>
					<Text style={styles.title}>
						{item?.title ?? "Not found"}
					</Text>
					<Text style={styles.publisher}>Not Xbox Game Studios</Text>
				</View>
			</View>
			<View style={styles.buttonGroup}>
				<TouchableOpacity
					style={[
						styles.button,
						{ backgroundColor: COLORS.primary, flexGrow: 2 },
					]}
				>
					<Text style={styles.buttonText}>PLAY</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, { flexGrow: 3 }]}>
					<Text style={styles.buttonText}>INSTALL TO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button]}>
					<Feather name="more-horizontal" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.bgDark,
		paddingHorizontal: SPACING.generalPaddingHorizontal,
		paddingTop: 20,
		gap: 20,
	},
	gameInfo: {
		flexDirection: "row",
		gap: 25,
	},
	banner: {
		width: 150,
		height: 150,
		borderRadius: 10,
	},
	textContainer: {
		flex: 1,
		gap: 10,
		flexDirection: "column",
		justifyContent: "center",
	},
	title: {
		color: "#fff",
		textAlign: "left",
		fontSize: 25,
	},
	publisher: { color: "#fff", textAlign: "left", fontSize: 16 },
	buttonGroup: { flexDirection: "row", justifyContent: "space-between", gap: 10 },
	button: { backgroundColor: "#817d9d", padding: 12, borderRadius: 30 },
	buttonText: {
		color: "#fff",
		fontSize: 17,
		fontWeight: "bold",
		textAlign: "center",
	},
});

export default Details;
