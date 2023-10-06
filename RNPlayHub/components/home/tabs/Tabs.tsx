import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { COLORS } from "../../../constants";

const Tabs = () => {
	const tabs: string[] = ["CLOUD", "CONSOLE", "PC"];
	const [activeTab, setActiveTab] = useState<string>(tabs[0]);
	const { width: windowWidth } = useWindowDimensions();

	return (
		<View style={styles.tabContainer}>
			<View style={styles.activeTabPill} />
			{tabs.map((tab, index) => (
				<TouchableOpacity
					key={index}
					style={styles.tabButton}
					onPress={() => {
						setActiveTab(tab);
					}}
				>
					<Text style={styles.tabText}>{tab}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	tabContainer: {
		backgroundColor: "#5f5f5f",
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginTop: 20,
		borderRadius: 25,
		padding: 5,
	},
	tabButton: {
		flex: 1,
		justifyContent: "center",
		paddingVertical: 8,
		borderRadius: 15,
	},
	activeTab: {
		backgroundColor: COLORS.primary,
	},
	tabText: {
		color: "#fff",
		fontWeight: "bold",
		textAlign: "center",
	},
	activeTabPill: {
		backgroundColor: COLORS.primary,
		width: "33%",
		height: "100%",
		borderRadius: 25,
		position: "absolute",
		top: 5,
		left: 5,
		transform: "translateX(125px)",
	},
});

export default Tabs;
