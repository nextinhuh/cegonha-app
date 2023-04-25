import { Dimensions, Text, View } from "react-native";

import Carousel from 'react-native-reanimated-carousel';

export function Dashboard() {
    const width = Dimensions.get('window').width - 40;

    return (
        <View className="flex-1">
            <View className="flex-row items-center justify-around mt-24 mb-8">
                <View className="bg-yellow-400 rounded-lg w-32 h-16">
                    <Text className="bg-white text-right mr-6 mt-3 pr-2 rounded-tr-md">Title 1</Text>

                    <Text
                        className="text-white text-lg text-center"
                        style={{ fontFamily: 'Roboto_500Medium' }}
                    >Description 1</Text>
                </View>

                <View className="bg-cyan-400 rounded-lg w-32 h-16">
                    <Text className="bg-white text-right mr-6 mt-3 pr-2 rounded-tr-md">Title 2</Text>

                    <Text
                        className="text-white text-lg text-center"
                        style={{ fontFamily: 'Roboto_500Medium' }}>Description 2</Text>
                </View>

                <View className="bg-purple-700 rounded-lg w-32 h-16">
                    <Text className="bg-white text-right mr-6 mt-3 pr-2 rounded-tr-md">Title 3</Text>

                    <Text
                        className="text-white text-lg text-center"
                        style={{ fontFamily: 'Roboto_500Medium' }}>Description 3</Text>
                </View>
            </View>

            <View className="w-full items-center mt-8">
                <Carousel
                    loop
                    width={width}
                    height={width / 2}
                    autoPlay={false}
                    data={[...new Array(6).keys()]}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ index }) => (
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 30 }}>
                                {index}
                            </Text>
                        </View>
                    )}
                />
            </View>

        </View>
    )
}