import { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export function ScreenTemplate({ title }: { title: string }) {
  const [text, setText] = useState('');

  return (
    <View className="flex-1 p-4">
      <Text variant="displayMedium">{title}</Text>
      <TextInput
        label="Username"
        value={text}
        onChangeText={setText}
        className="mt-4"
      />
    </View>
  );
}
