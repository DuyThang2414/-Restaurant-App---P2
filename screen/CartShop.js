// screens/Cart.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function CartShop() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(2);

  const unitPrice = 28;
  const subtotal = unitPrice * quantity;
  const deliveryFee = 6.2;
  const total = subtotal + deliveryFee;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Shopping Cart</Text>
        <Icon name="trash-outline" size={24} color="#000" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
            }}
            style={styles.mainImage}
          />
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>10% OFF</Text>
          </View>
          <View style={styles.thumbnailContainer}>
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                source={{
                  uri: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
                }}
                style={styles.thumbnail}
              />
            ))}
          </View>
        </View>

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <View style={styles.productHeader}>
            <Text style={styles.productName}>BURGER</Text>
            <Text style={styles.productPrice}>${unitPrice}</Text>
          </View>
          <Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>

          {/* Quantity */}
          <View style={styles.quantityRow}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Icon name="remove-circle-outline" size={26} color="#5B4BFF" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>
              {quantity < 10 ? `0${quantity}` : quantity}
            </Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Icon name="add-circle-outline" size={26} color="#5B4BFF" />
            </TouchableOpacity>
          </View>

          {/* Delivery Address */}
          <View style={styles.sectionRow}>
            <View style={styles.addressBox}>
              <Icon name="location-outline" size={18} color="#5B4BFF" />
              <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
            </View>
            <TouchableOpacity>
              <Icon name="create-outline" size={20} color="#5B4BFF" />
            </TouchableOpacity>
          </View>

          {/* Payment Method */}
          <View style={styles.sectionRow}>
            <View style={styles.paymentBox}>
              <Icon name="card-outline" size={18} color="#5B4BFF" />
              <Text style={styles.paymentText}>Payment Method</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>

          {/* Checkout Summary */}
          <View style={styles.summaryBox}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal ({quantity})</Text>
              <Text style={styles.summaryValue}>${subtotal}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Delivery Fee</Text>
              <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={[styles.summaryLabel, { fontWeight: "bold" }]}>
                Payable Total
              </Text>
              <Text
                style={[
                  styles.summaryValue,
                  { color: "#5B4BFF", fontWeight: "bold" },
                ]}
              >
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* Confirm Order Button */}
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={styles.confirmText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: { fontSize: 18, fontWeight: "bold" },
  imageContainer: {
    marginTop: 10,
    alignItems: "center",
    position: "relative",
  },
  mainImage: { width: "90%", height: 160, borderRadius: 16 },
  discountTag: {
    position: "absolute",
    top: 10,
    left: 20,
    backgroundColor: "#5B4BFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  discountText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  thumbnailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 8,
  },
  thumbnail: {
    width: 50,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  infoContainer: { paddingHorizontal: 16, marginTop: 16 },
  productHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productName: { fontSize: 22, fontWeight: "bold" },
  productPrice: { fontSize: 18, fontWeight: "bold", color: "#5B4BFF" },
  rating: { color: "#555", marginTop: 4 },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    gap: 12,
  },
  quantityText: { fontSize: 18, fontWeight: "bold" },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  addressBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDEEFF",
    padding: 10,
    borderRadius: 12,
  },
  addressText: { marginLeft: 6, fontWeight: "bold", color: "#333" },
  paymentBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  paymentText: { fontWeight: "bold", color: "#333" },
  changeText: {
    color: "#5B4BFF",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#5B4BFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  summaryBox: { marginTop: 20 },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  summaryLabel: { color: "#555" },
  summaryValue: { color: "#555" },
  confirmButton: {
    backgroundColor: "#5B4BFF",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 24,
    marginBottom: 40,
  },
  confirmText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
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
