import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Animated,
	useWindowDimensions,
	ImageBackground,
} from "react-native";
import { useRef } from "react";
import { COLORS } from "../../../constants";

const Banner = () => {
	const scrollX = useRef(new Animated.Value(0)).current;
	const { width: windowWidth } = useWindowDimensions();

	const images = new Array(6).fill(
		"https://i.ytimg.com/vi/cklw-Yu3moE/maxresdefault.jpg"
	);

	return (
		<View style={styles.scrollContainer}>
			<ScrollView
				horizontal={true}
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				onScroll={Animated.event([
					{
						nativeEvent: {
							contentOffset: {
								x: scrollX,
							},
						},
					},
				])}
				scrollEventThrottle={1}
			>
				{images.map((image, imageIndex) => {
					return (
						<View
							style={{ width: windowWidth, height: 250 }}
							key={imageIndex}
						>
							<ImageBackground
								source={{ uri: image }}
								style={styles.banner}
							>
								<View style={styles.textContainer}>
									<Text style={styles.bannerTitle}>
										{"Image - " + imageIndex}
									</Text>
								</View>
							</ImageBackground>
						</View>
					);
				})}
			</ScrollView>
			<View style={styles.indicatorContainer}>
				{images.map((image, imageIndex) => {
					const width = scrollX.interpolate({
						inputRange: [
							windowWidth * (imageIndex - 1),
							windowWidth * imageIndex,
							windowWidth * (imageIndex + 1),
						],
						outputRange: [8, 16, 8],
						extrapolate: "clamp",
					});
					return (
						<Animated.View
							key={imageIndex}
							style={[styles.normalDot, { width }]}
						/>
					);
				})}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	scrollContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	banner: {
		flex: 1,
		marginVertical: 4,
		marginHorizontal: 16,
		borderRadius: 5,
		overflow: "hidden",
		alignItems: "flex-start",
		justifyContent: "flex-end",
	},
	textContainer: {
		backgroundColor: "rgba(0,0,0, 0.7)",
		paddingHorizontal: 24,
		paddingVertical: 8,
		borderRadius: 5,
		marginBottom: 50,
		marginLeft: 10,
	},
	bannerTitle: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	normalDot: {
		height: 8,
		width: 8,
		borderRadius: 4,
		backgroundColor: "silver",
		marginHorizontal: 4,
	},
	indicatorContainer: {
		position: "absolute",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		bottom: 15,
		left: 25,
	},
});

export default Banner;
