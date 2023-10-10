import { SafeAreaView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Downloads from "../../components/library/downloads/Downloads";
import Playlist from "../../components/library/playlist/Playlist";
import { COLORS, SPACING } from "../../constants";

const Library = () => {
	const router = useRouter();
	return (
		<SafeAreaView style={styles.container}>
			<Downloads />
			<Playlist />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.bgDark,
		paddingHorizontal: SPACING.generalPaddingHorizontal,
		paddingTop: 20,
	},
});

export default Library;
