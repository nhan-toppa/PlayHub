import { Stack } from "expo-router/stack";
import { Image, TouchableOpacity } from "react-native";
import { icons } from "../../constants";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "",
					headerRight: () => (
						<>
							<TouchableOpacity>
								<Image
									source={icons.search}
									style={{
										width: 24,
										height: 24,
										marginLeft: 18,
									}}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={icons.notification}
									style={{
										width: 24,
										height: 24,
										marginLeft: 18,
									}}
								/>
							</TouchableOpacity>
						</>
					),
				}}
			/>
			<Stack.Screen
				name="library"
				options={{
					headerShown: true,
				}}
			/>
		</Stack>
	);
}
