import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../../../constants";
import ProgressBar from "react-native-animated-progress";
import { useState } from "react";

interface DownloadItemProps {
	item: {
		id: number;
		title: string;
		status: string;
		url: string;
	};
}

const DownloadItem = ({ item }: DownloadItemProps) => {
	const [progress, setProgress] = useState(0);

	const download = () => {
		setProgress((previousProgress) => previousProgress + 10);
	};

	if (progress > 100) {
		setProgress(0);
	}

	return (
		<View style={styles.container}>
			<Image source={{ uri: item.url }} style={styles.banner} />
			<View style={styles.middleContainer}>
				<Text style={styles.title}>{item.title}</Text>
				{item.status === "Downloading" ? (
					<ProgressBar
						progress={progress}
						height={7}
						backgroundColor={COLORS.primary}
					/>
				) : (
					<Text style={styles.status}>{item.status}</Text>
				)}
			</View>
			<TouchableOpacity onPress={download}>
				<Feather name="more-horizontal" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	middleContainer: {
		flex: 2,
		gap: 10,
	},
	banner: {
		width: 90,
		height: 90,
		borderRadius: 10,
	},
	title: {
		color: "#fff",
		textAlign: "left",
		fontSize: 20,
	},
	status: {
		color: "#fff",
		textAlign: "left",
		fontSize: 16,
	},
});

export default DownloadItem;
