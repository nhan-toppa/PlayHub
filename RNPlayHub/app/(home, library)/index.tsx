import { StatusBar } from "expo-status-bar";
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	Animated,
	useWindowDimensions,
	ImageBackground,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useTheme } from "../../contexts/ThemeContext";
import { useRef } from "react";

export default function Home() {
	const router = useRouter();
	const { theme } = useTheme();
	const scrollX = useRef(new Animated.Value(0)).current;
	const { width: windowWidth } = useWindowDimensions();
	const images = new Array(6).fill(
		"https://i.ytimg.com/vi/cklw-Yu3moE/maxresdefault.jpg"
	);

	return (
		<SafeAreaView style={styles.container}>
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
									style={styles.card}
								>
									<View style={styles.textContainer}>
										<Text style={styles.infoText}>
											{"Image - " + imageIndex}
										</Text>
									</View>
								</ImageBackground>
							</View>
						);
					})}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContainer: {
		height: 300,
		alignItems: "center",
		justifyContent: "center",
	},
	card: {
		flex: 1,
		marginVertical: 4,
		marginHorizontal: 16,
		borderRadius: 5,
		overflow: "hidden",
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		backgroundColor: "rgba(0,0,0, 0.7)",
		paddingHorizontal: 24,
		paddingVertical: 8,
		borderRadius: 5,
	},
	infoText: {
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
