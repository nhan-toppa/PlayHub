import { StyleSheet, SafeAreaView } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { COLORS } from "../../constants";
import Tabs from "../../components/home/tabs/Tabs";
import Banner from "../../components/home/banner/Banner";

export default function Home() {
	const { theme } = useTheme();

	return (
		<SafeAreaView style={styles.container}>
			<Banner />
			<Tabs />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.bgDark,
	},
});
