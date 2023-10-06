import { Tabs } from "expo-router/tabs";
import { Image } from "react-native";
import { COLORS, icons } from "../constants";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppLayout() {
	return (
		<ThemeProvider>
			<Tabs
				screenOptions={{
					tabBarStyle: { backgroundColor: COLORS.bgDark, height: 60, borderTopWidth: 0 },
					headerStyle: { backgroundColor: COLORS.bgDark },
				}}
			>
				<Tabs.Screen
					name="(home)"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: () => (
							<Entypo name="home" size={24} color="white" />
						),
						href: "/",
						headerShown: false,
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: () => (
							<Image
								source={icons.profile}
								style={{ width: 24, height: 24 }}
							/>
						),
						href: "/profile",
						headerShadowVisible: false,
					}}
				/>
				<Tabs.Screen
					name="(library)"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: () => (
							<MaterialCommunityIcons
								name="library-shelves"
								size={24}
								color="white"
							/>
						),
						href: "/library",
						headerShown: false,
					}}
				/>
			</Tabs>
		</ThemeProvider>
	);
}
