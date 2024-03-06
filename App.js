import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import image from './assets/image.png';

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
          <Text style={{marginVertical: 5}}>@octocat</Text>
          <Text>Joined 25 Jan 2024</Text>
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
  }
});
