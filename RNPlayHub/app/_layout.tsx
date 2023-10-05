import { Tabs } from "expo-router/tabs";
import { Image } from "react-native";
import { icons } from "../constants";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function AppLayout() {
	return (
		<ThemeProvider>
			<Tabs>
				<Tabs.Screen
					name="(home)"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: () => (
							<Image
								source={icons.home}
								style={{ width: 24, height: 24 }}
							/>
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
					}}
				/>
				<Tabs.Screen
					name="(library)"
					options={{
						tabBarShowLabel: false,
						tabBarIcon: () => (
							<Image
								source={icons.library}
								style={{ width: 24, height: 24 }}
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
