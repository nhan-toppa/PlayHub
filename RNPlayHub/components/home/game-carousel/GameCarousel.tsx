import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import React from "react";

const GameCarousel = () => {
	const images = new Array(6).fill(
		"https://static.wikia.nocookie.net/seaofthieves_gamepedia/images/1/14/Sea_of_Thieves_cover_art.jpg/revision/latest/scale-to-width-down/1000?cb=20211226054951"
	);

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
				{images.map((image, index) => (
					<TouchableOpacity key={index} style={styles.gameCard}>
						<ImageBackground
							source={{ uri: image }}
							style={{ flex: 1 }}
						>
							<View>
								<Text>{"Image - " + index}</Text>
							</View>
						</ImageBackground>
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
		paddingRight: 15,
		borderRadius: 10,
	},
});

export default GameCarousel;
