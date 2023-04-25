import { Dimensions, Text, View } from "react-native";

import Carousel from 'react-native-reanimated-carousel';
import { ProfileHeader } from "../components/ProfileHeader";

export function Dashboard() {
    const width = Dimensions.get('window').width - 40;

    return (
        <>
            <ProfileHeader />

            <View className="flex-1 w-full items-center mt-4">
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
        </>
    )
}