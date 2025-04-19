import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SelectLocationScreen() {
  const [zone, setZone] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = () => {
    if (zone && area) {
      Alert.alert("Location Selected", `Zone: ${zone}, Area: ${area}`);
    } else {
      Alert.alert("Error", "Please select both zone and area");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Location</Text>
      <Text style={{ marginBottom: 5 }}>Your Zone</Text>
      <Picker
        selectedValue={zone}
        onValueChange={setZone}
        style={styles.picker}
      >
        <Picker.Item label="Select zone" value="" />
        <Picker.Item label="Banasree" value="Banasree" />
        <Picker.Item label="Uttara" value="Uttara" />
      </Picker>

      <Text style={{ marginTop: 20, marginBottom: 5 }}>Your Area</Text>
      <Picker
        selectedValue={area}
        onValueChange={setArea}
        style={styles.picker}
      >
        <Picker.Item label="Select area" value="" />
        <Picker.Item label="Block A" value="Block A" />
        <Picker.Item label="Block B" value="Block B" />
      </Picker>

      <Button title="Submit" onPress={handleSubmit} style={{ marginTop: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  picker: { height: 50, borderWidth: 1, borderColor: "#ccc" },
});
