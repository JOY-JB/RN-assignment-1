import { Entypo, FontAwesome6 } from '@expo/vector-icons';
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "./assets/image.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={image}
          contentFit="cover"
          transition={1000}
        />
        <View>
          <Text style={styles.title}>The Octocat</Text>
          <Text style={{ marginVertical: 5 }}>@octocat</Text>
          <Text>Joined 25 Jan 2024</Text>
        </View>
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab porro
        saepe ipsa, quia voluptatibus asperiores voluptas qui magni assumenda.
      </Text>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Repos</Text>
          <Text style={styles.cardBody}>8</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Followers</Text>
          <Text style={styles.cardBody}>3938</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Following</Text>
          <Text style={styles.cardBody}>9</Text>
        </View>
      </View>
      <View style={{gap:20}}>
      <View style={styles.info}>
        <Entypo name="location-pin" size={30} color="gray" />
        <Text style={styles.infoContent}>San Francisco</Text>
      </View>
      <View style={styles.info}>
        <Entypo name="link" size={30} color="gray" />
        <Text style={styles.infoContent}>https://github.blog</Text>
      </View>
      <View style={styles.info}>
        <Entypo name="twitter" size={30} color="#A9A9A9" />
        <Text style={{...styles.infoContent, color:"#A9A9A9"}}>Not Available</Text>
      </View>
      <View style={styles.info}>
        <FontAwesome6 name="building-lock" size={30} color="gray" />
        <Text style={styles.infoContent}>@github</Text>
      </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 40,
  },
  description: {
    color: "gray",
    fontSize: 18,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#f4f4f4",
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  cardContent: {
    alignItems: "center",
    gap: 10,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "gray",
  },
  cardBody: {
    fontSize: 22,
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoContent: {
    fontSize: 20,
    color: "gray",
  },
});
