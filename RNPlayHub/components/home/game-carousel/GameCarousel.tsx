import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import React from "react";
import { data } from "../../../constants";

const GameCarousel = () => {
	return (
		<View style={styles.carouselContainer}>
			<View style={styles.carouselHeader}>
				<Text style={styles.headerTitle}>Jump back in</Text>
				<TouchableOpacity>
					<Text style={styles.headerButton}>Show all</Text>
				</TouchableOpacity>
			</View>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={styles.carouselItems}
			>
				{data.gameCarousel.map((item, index) => (
					<TouchableOpacity key={index} style={styles.gameCard}>
						<ImageBackground
							source={{ uri: item.url }}
							style={{ flex: 1 }}
						></ImageBackground>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	carouselContainer: {
		flex: 1,
		marginTop: 20,
	},
	carouselHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "baseline",
	},
	carouselItems: {
		marginTop: 20,
	},
	headerTitle: {
		fontSize: 22,
		color: "#fff",
	},
	headerButton: {
		fontSize: 15,
		color: "#fff",
	},
	gameCard: {
		width: 200,
		paddingRight: 10,
		borderRadius: 10,
	},
});

export default GameCarousel;
