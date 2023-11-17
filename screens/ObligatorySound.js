import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const Sound = () => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    if (sound) {
      // If the sound is already playing, pause it.
      await sound.pauseAsync();
    } else {
      // If no sound is playing, start playing it.
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/Music/eco-technology.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    }
  }

  async function stopSound() {
    if (sound) {
      // If there is a sound playing, stop it and unload it.
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null); // Set the sound to null to indicate no sound is playing.
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Sound Screen!</Text>
        <Ionicons name="musical-notes-outline" size={80} color="blue" />
      </View>

      <View style={styles.container}>
        <Button title={sound ? 'Stop Sound' : 'Play Sound'} onPress={sound ? stopSound : playSound} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sound;
