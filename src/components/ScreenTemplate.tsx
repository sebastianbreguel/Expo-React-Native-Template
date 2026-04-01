import { View } from 'react-native';
import { Text } from 'react-native-paper';

export function ScreenTemplate({ title }: { title: string }) {
  return (
    <View className="flex-1 p-4">
      <Text variant="displayMedium">{title}</Text>
    </View>
  );
}
