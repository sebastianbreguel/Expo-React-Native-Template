import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreenTemplate } from '@/components/ScreenTemplate';
import type { RootStackParamList } from '@/navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home(_props: Props) {
  return <ScreenTemplate title="Home" />;
}

export default Home;
