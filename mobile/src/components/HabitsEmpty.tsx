import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <Text className="text-zinc-400 text-base">
      You aren't monitoring any habit yet.{' '}
      <Text
        className="text-violet-400 text-vase underline active:text-violet-500"
        onPress={() => navigate('new')}
      >
        Start now creating a new one!
      </Text>
    </Text>
  );
}
