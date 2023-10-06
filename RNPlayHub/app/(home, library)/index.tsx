import { StyleSheet, SafeAreaView } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { COLORS, SPACING } from "../../constants";
import Tabs from "../../components/home/tabs/Tabs";
import Banner from "../../components/home/banner/Banner";
import GameCarousel from "../../components/home/game-carousel/GameCarousel";

export default function Home() {
	const { theme } = useTheme();

	return (
		<SafeAreaView style={styles.container}>
			<Banner />
			<Tabs />
			<GameCarousel />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.bgDark,
		paddingHorizontal: SPACING.generalPaddingHorizontal,
	},
});
