import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Playlist = () => {
	return (
		<View style={styles.container}>
			<Text>Playlist</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: COLORS.bgDark,
		// paddingHorizontal: SPACING.generalPaddingHorizontal,
		// paddingTop: 20,
	},
});

export default Playlist;
