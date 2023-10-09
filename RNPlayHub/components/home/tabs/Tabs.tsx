import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { COLORS } from "../../../constants";
import Animated, { useSharedValue, withSpring, withTiming } from "react-native-reanimated";

const Tabs = () => {
	const tabs: string[] = ["CLOUD", "CONSOLE", "PC"];
	const [activeTab, setActiveTab] = useState<string>(tabs[0]);
	const offset = useSharedValue(0);

	useEffect(() => {
		const index = tabs.indexOf(activeTab);
		// tabOffset: 125px
		offset.value = withTiming(index * 125, { duration: 200 });
	}, [activeTab]);

	return (
		<View style={styles.tabContainer}>
			<Animated.View
				style={[
					styles.activeTabPill,
					{ transform: [{ translateX: offset }] },
				]}
			/>
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
		// transform: "translateX(125px)",
	},
});

export default Tabs;
