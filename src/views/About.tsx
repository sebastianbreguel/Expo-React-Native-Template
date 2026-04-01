import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreenTemplate } from '@/components/ScreenTemplate';
import type { RootStackParamList } from '@/navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'About'>;

function About(_props: Props) {
  return <ScreenTemplate title="About" />;
}

export default About;
