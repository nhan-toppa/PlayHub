import { View, Text } from "react-native";
import { data } from "../../../constants";
import { useLocalSearchParams } from "expo-router";

const Details = () => {
	const { id } = useLocalSearchParams<{ id: string }>();
	const item = data.games.find((game) => game.id === Number(id));
	return (
		<View>
			<Text>{item?.title ?? "Not found"}</Text>
		</View>
	);
};

export default Details;
