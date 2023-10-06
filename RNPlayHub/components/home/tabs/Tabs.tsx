import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { COLORS } from "../../../constants";

const Tabs = () => {
	const tabs: string[] = ["CLOUD", "CONSOLE", "PC"];
	const [activeTab, setActiveTab] = useState<string>(tabs[0]);

	return (
		<View style={styles.tabContainer}>
			{tabs.map((tab, index) => (
				<TouchableOpacity
					key={index}
					style={[
						styles.tabButton,
						activeTab === tab && styles.activeTab,
					]}
					onPress={() => {
						setActiveTab(tab);
					}}
				>
					<Text>{tab}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	tabContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 20,
	},
	tabButton: {
		paddingVertical: 8,
		paddingHorizontal: 15,
		backgroundColor: "#5f5f5f",
		borderRadius: 15,
	},
	activeTab: {
		backgroundColor: COLORS.primary,
	},
});

export default Tabs;
