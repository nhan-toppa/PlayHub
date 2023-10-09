import { StyleSheet, SafeAreaView } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";
import { COLORS, SPACING } from "../../constants";
import Tabs from "../../components/home/tabs/Tabs";
import Banner from "../../components/home/banner/Banner";
import GameCarousel from "../../components/home/game-carousel/GameCarousel";
import { useState } from "react";

export default function Home(): JSX.Element {
	const { theme } = useTheme();
	const tabs: string[] = ["CLOUD", "CONSOLE", "PC"];
	const [activeTab, setActiveTab] = useState<string>(tabs[0]);

	return (
		<SafeAreaView style={styles.container}>
			<Banner />
			<Tabs
				tabs={tabs}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<GameCarousel activeTab={activeTab} />
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
