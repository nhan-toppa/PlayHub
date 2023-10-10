import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import DownloadItem from "./download-item/DownloadItem";
import { data } from "../../../constants";

const Downloads = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Downloads</Text>
			<FlatList
				data={data.downloadItems}
				renderItem={({ item }) => <DownloadItem />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
	},
	header: {
		color: "#fff",
		fontSize: 26,
	},
});

export default Downloads;
