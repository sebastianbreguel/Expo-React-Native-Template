import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

import type { RootStackParamList } from '@/navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home(_props: Props) {
  const [text, setText] = useState('');

  return (
    <View className="flex-1 p-4">
      <Text variant="displayMedium">Home</Text>
      <TextInput
        label="Username"
        value={text}
        onChangeText={setText}
        className="mt-4"
      />
    </View>
  );
}

export default Home;
