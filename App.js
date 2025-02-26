import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";

const PhoneValidationApp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^(\+84|0)(3|5|7|8|9)\d{8}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setError("");

      alert("Số điện thoại hợp lệ");
    } else {
      setError("Số điện thoại không hợp lệ");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác thực số điện thoại Việt Nam</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button title="Xác thực" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
});

export default PhoneValidationApp;
