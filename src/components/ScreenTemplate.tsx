import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native-paper';

export function ScreenTemplate({ title }: { title: string }) {
  return (
    <SafeAreaView className="flex-1 p-4">
      <Text variant="displayMedium">{title}</Text>
    </SafeAreaView>
  );
}
