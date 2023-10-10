import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { data } from "../../../constants";
import { useRouter } from "expo-router";

const Playlist = () => {
	const router = useRouter();
	const numberOfColumns = 3;
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Your playlist</Text>
			<FlatList
				data={data.games}
				renderItem={({ item, index }) => {
					if (
						index === data.games.length - 1 &&
						data.games.length % numberOfColumns > 1
					) {
						return (
							<>
								<TouchableOpacity
									onPress={() =>
										router.push(`/game-details/${item.id}`)
									}
								>
									<Image
										source={{ uri: item.url }}
										style={[
											styles.gridItem,
											{ marginLeft: 10 },
										]}
									/>
								</TouchableOpacity>
								<View style={styles.lastItem} />
							</>
						);
					}
					return (
						<TouchableOpacity
							onPress={() =>
								router.push(`/game-details/${item.id}`)
							}
						>
							<Image
								source={{ uri: item.url }}
								style={styles.gridItem}
							/>
						</TouchableOpacity>
					);
				}}
				numColumns={numberOfColumns}
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
