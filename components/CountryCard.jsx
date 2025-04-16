
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Image,
    ScrollView,
    SafeAreaView,
  } from "react-native";

export function CountryCard({ country, onPress }) {
  return (
    <Pressable style={styles.card} 
     onPress={onPress}>
      <Image style={styles.image} source={{ uri: country.flags.png }} />
      <Text style={styles.titulo}>{country.name.common}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    borderWidth: 1,
    bordercolor: "#ede",
  },
  titulo: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginTop: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    height: 100,
    height: 180,

    alignItems: "center",
    justifyContent: "center",
  },




});

