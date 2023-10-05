import { Tabs } from "expo-router/tabs";

export default function AppLayout() {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					href: "/",
				}}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{
					title: "Profile",
					href: "/profile",
				}}
			/>
			<Tabs.Screen
				name="library/index"
				options={{
					title: "Library",
					href: "/library",
				}}
			/>
		</Tabs>
	);
}
