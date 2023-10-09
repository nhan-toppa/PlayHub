import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import { useRef } from "react";
import { data } from "../../../constants";
import { useRouter } from "expo-router";

interface Props {
	tabs: string[];
	activeTab: string;
}

const GameCarousel = ({ tabs, activeTab }: Props): JSX.Element => {
	const router = useRouter();
	type Game = {
		id: number;
		title: string;
		url: string;
		description?: string;
	};

	let games: Game[] = [];
	switch (activeTab) {
		case tabs[0]:
			games = data.games.filter((game) => game.id >= 7 && game.id <= 12);
			break;
		case tabs[1]:
			games = data.games.filter((game) => game.id >= 13 && game.id <= 16);
			break;
		case tabs[2]:
			games = data.games.filter((game) => game.id >= 17 && game.id <= 20);
			break;
		default:
			games = [];
	}

	const scrollRef = useRef<ScrollView>(null);

	scrollRef.current?.scrollTo({
		x: 0,
		animated: false,
	});

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
				ref={scrollRef}
			>
				{games
					.filter((game) => game.id > 6)
					.map((item, index) => (
						<TouchableOpacity
							key={index}
							style={styles.gameCard}
							onPress={() =>
								router.push(`/game-details/${item.id}`)
							}
						>
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
