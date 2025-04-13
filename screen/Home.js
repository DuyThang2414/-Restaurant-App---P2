// screens/Home.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <View style={styles.location}>
          <Text style={styles.locationText}>Your Location</Text>
          <Text style={styles.locationPlace}>
            <Icon name="location-outline" size={14} color="#5B4BFF" /> Savar,
            Dhaka
          </Text>
        </View>
        <Icon name="notifications-outline" size={24} color="#000" />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search your food" style={styles.searchInput} />
        <Icon name="options-outline" size={24} style={styles.filterIcon} />
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        {["PIZZA", "BURGER", "DRINK", "RICE"].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={item === "PIZZA" ? styles.categoryActive : styles.category}
          >
            <Text
              style={
                item === "PIZZA"
                  ? styles.categoryTextActive
                  : styles.categoryText
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Hot Offer */}
      <View style={styles.offerContainer}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
          }}
          style={styles.offerImage}
        />
        <View style={styles.offerText}>
          <Text style={styles.offerTitle}>BURGER</Text>
          <Text style={styles.offerDesc}>Today's Hot offer</Text>
          <Text style={styles.offerRating}>⭐ 4.9 (3k+ Rating)</Text>
        </View>
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>10% OFF</Text>
        </View>
      </View>

      {/* Popular Items */}
      <View style={styles.popularSection}>
        <Text style={styles.popularTitle}>Popular Items</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <ScrollView horizontal style={styles.popularScroll}>
        {[
          {
            name: "BURGER",
            image:
              "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
          },
          {
            name: "PIZZA",
            image:
              "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
          },
        ].map((item, index) => (
          <View key={index} style={styles.popularCard}>
            <Image source={{ uri: item.image }} style={styles.popularImage} />
            <Text style={styles.popularName}>{item.name}</Text>
          </View>
        ))}
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
  container: { flex: 1, paddingTop: 40, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  location: { flex: 1, marginLeft: 10 },
  locationText: { fontSize: 12, color: "#999" },
  locationPlace: { fontSize: 14, fontWeight: "bold", color: "#5B4BFF" },
  searchContainer: {
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  searchInput: { flex: 1, height: 40 },
  filterIcon: { marginLeft: 8, color: "#888" },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
  },
  category: {
    backgroundColor: "#eee",
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 16,
  },
  categoryActive: {
    backgroundColor: "#5B4BFF",
    borderRadius: 8,
    padding: 8,
    paddingHorizontal: 16,
  },
  categoryText: { color: "#333" },
  categoryTextActive: { color: "#fff", fontWeight: "bold" },
  offerContainer: {
    margin: 16,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
  },
  offerImage: { width: "100%", height: 160 },
  offerText: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  offerTitle: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  offerDesc: { color: "#fff" },
  offerRating: { color: "#fff", marginTop: 4 },
  discountBadge: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#5B4BFF",
    borderRadius: 20,
    padding: 6,
  },
  discountText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  popularSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 16,
  },
  popularTitle: { fontWeight: "bold", fontSize: 16 },
  viewAll: { color: "#5B4BFF" },
  popularScroll: { paddingLeft: 16, marginTop: 8 },
  popularCard: {
    marginRight: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    padding: 8,
    alignItems: "center",
  },
  popularImage: { width: 100, height: 80, borderRadius: 8 },
  popularName: { marginTop: 4, fontWeight: "bold" },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});
