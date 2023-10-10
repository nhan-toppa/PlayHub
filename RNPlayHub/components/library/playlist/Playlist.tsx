import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { data } from "../../../constants";

const Playlist = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Playlist</Text>
			<FlatList
				data={data.games}
				renderItem={({ item, index }) => {
					if (index === data.games.length - 1) {
						return (
							<>
								<Image
									source={{ uri: item.url }}
									style={[
										styles.gridItem,
										{ marginLeft: 10 },
									]}
								/>
								<View style={styles.lastItem} />
							</>
						);
					}
					return (
						<Image
							source={{ uri: item.url }}
							style={styles.gridItem}
						/>
					);
				}}
				numColumns={3}
				contentContainerStyle={styles.gameGrid}
				columnWrapperStyle={{ justifyContent: "space-between" }}
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
	gameGrid: {
		gap: 10,
	},
	gridItem: {
		width: 120,
		height: 120,
		borderRadius: 5,
	},
	lastItem: {
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: "auto",
	},
});

export default Playlist;
