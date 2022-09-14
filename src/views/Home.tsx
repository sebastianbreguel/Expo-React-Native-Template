import React, { useState } from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

function Home() {
  const [text, setText] = useState<string>("");

  return (
    <View>
      <Text>Home</Text>
      {/* Example of useState and textInput interaction */}
      <TextInput
        label="username"
        value={text}
        onChangeText={setText}
        placeholder={"Seba Breguel uc"}
      />
      <Text variant="displayMedium">Hello World!</Text>
    </View>
  );
}

export default Home;
