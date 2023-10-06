import { Stack } from "expo-router/stack";
import { Image, TouchableOpacity } from "react-native";
import { icons } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerStyle: { backgroundColor: "#1e1e1e" } }}>
			<Stack.Screen
				name="index"
				options={{
					title: "",
					headerShadowVisible: false,
					headerRight: () => (
						<>
							<TouchableOpacity>
								<FontAwesome
									name="search"
									size={24}
									color="white"
                                    style={{ marginRight: 18 }}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Ionicons
									name="notifications"
									size={24}
									color="white"
								/>
							</TouchableOpacity>
						</>
					),
				}}
			/>
			<Stack.Screen
				name="library"
				options={{
					headerShadowVisible: false,
				}}
			/>
		</Stack>
	);
}
