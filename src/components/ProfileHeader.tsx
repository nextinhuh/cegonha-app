import { View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function ProfileHeader() {
    return (
        <View className="flex items-center justify-center relative h-1/4 w-full bg-purple-700 rounded-b-3xl">
            <View className="w-80 h-24 rounded-md p-3 flex-row items-center">
                <View className="border-2 p-1 border-white rounded-full">
                    <Image
                        className="w-16 h-16 rounded-full"
                        source={{ uri: "https://fakeimg.pl/350x200" }}
                    />
                </View>


                <View className="ml-4">
                    <Text
                        className="text-zinc-400 text-xl"
                        style={{ fontFamily: 'Roboto_300Light' }}>
                        Olá!
                    </Text>

                    <Text
                        className="text-white text-2xl"
                        style={{ fontFamily: 'Roboto_400Regular' }}>
                        Nome teste
                    </Text>
                </View>

                <View className="ml-auto flex-row items-center justify-center">
                    <Feather name="bell" size={24} color="white" />
                </View>
            </View>
        </View>
    );
}