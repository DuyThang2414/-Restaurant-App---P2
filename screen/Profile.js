// screens/Profile.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleSwitch = () => setDarkMode((previous) => !previous);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Avatar Section */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/41.jpg",
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Icon name="create-outline" size={16} color="#5B4BFF" />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Rakibul Hasan</Text>
          <Text style={styles.email}>rakibbrand@gmail.com</Text>
        </View>

        {/* Profile Options */}
        <View style={styles.option}>
          <Icon name="home-outline" size={20} color="#555" />
          <Text style={styles.optionText}>Home</Text>
          <Icon name="chevron-forward-outline" size={20} color="#bbb" />
        </View>
        <View style={styles.option}>
          <Icon name="card-outline" size={20} color="#555" />
          <Text style={styles.optionText}>My Card</Text>
          <Icon name="chevron-forward-outline" size={20} color="#bbb" />
        </View>
        <View style={styles.option}>
          <Icon name="moon-outline" size={20} color="#555" />
          <Text style={styles.optionText}>Dark Mood</Text>
          <Switch
            value={darkMode}
            onValueChange={toggleSwitch}
            trackColor={{ false: "#ccc", true: "#5B4BFF" }}
            thumbColor={darkMode ? "#fff" : "#f4f3f4"}
          />
        </View>
        <View style={styles.option}>
          <Icon name="bicycle-outline" size={20} color="#555" />
          <Text style={styles.optionText}>Track Your Order</Text>
          <Icon name="chevron-forward-outline" size={20} color="#bbb" />
        </View>
        <View style={styles.option}>
          <Icon name="settings-outline" size={20} color="#555" />
          <Text style={styles.optionText}>Settings</Text>
          <Icon name="chevron-forward-outline" size={20} color="#bbb" />
        </View>
        <View style={styles.option}>
          <Icon name="help-circle-outline" size={20} color="#555" />
          <Text style={styles.optionText}>Help Center</Text>
          <Icon name="chevron-forward-outline" size={20} color="#bbb" />
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
          <Icon
            name="log-out-outline"
            size={18}
            color="#fff"
            style={{ marginLeft: 6 }}
          />
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={24} color="#5B4BFF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icon name="cart" size={24} color="#5B4BFF" />
        </TouchableOpacity>
        <Icon name="chatbubbe-ellipses" size={24} color="#5B4BFF" />

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon name="person" size={24} color="#5B4BFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: { fontSize: 18, fontWeight: "bold" },

  profileSection: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#FFF8EE",
    paddingVertical: 30,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 10,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#5B4BFF",
  },
  editIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: "#5B4BFF",
  },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 4 },
  email: { color: "#888", fontSize: 14 },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    justifyContent: "space-between",
  },
  optionText: { flex: 1, marginLeft: 12, fontSize: 16, color: "#333" },

  logoutButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5B4BFF",
    marginHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 30,
  },
  logoutText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
  },
});
