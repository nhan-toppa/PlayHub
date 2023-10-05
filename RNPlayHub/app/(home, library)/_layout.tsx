import { Stack } from "expo-router/stack";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={
					{
						headerShown: true
					}
				}
			/>
            <Stack.Screen
				name="library"
				options={
					{
						headerShown: true
					}
				}
			/>
		</Stack>
	);
}
