import React from "react";
import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

const About = () => {
  const [text, setText] = React.useState<string>("");

  return (
    <View style={{ padding: 16 }}>
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
};

export default About;
