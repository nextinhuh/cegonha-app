import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    function createNewUser(): void {
        /*createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                console.log(user);
                // ...
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });*/
    }

    function handleMoveToSignIn(): void {
        navigation.goBack();
    }

    return (
        <View className="flex-1 bg-slate-50">
            <View className="flex items-center justify-center relative h-3/5 w-full bg-purple-700 rounded-b-2xl">
                <Text
                    className="mt-80 text-6xl text-white mb-16"
                    style={{ fontFamily: 'JosefinSlab_700Bold' }}>
                    Cegonha
                </Text>

                <View
                    className="bg-white rounded-3xl w-96 p-8 shadow-2xl items-center justify-around"
                    style={{ elevation: 10 }}
                >
                    <Text
                        className="text-xl mb-6"
                        style={{ fontFamily: 'Roboto_500Medium' }}>
                        Cadastre-se!
                    </Text>

                    <Input
                        placeholder="E-mail"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <Input
                        placeholder="Senha"
                        autoCapitalize="none"
                        secureTextEntry
                        className="mt-7"
                    />

                    <Input
                        placeholder="Confirmar senha"
                        autoCapitalize="none"
                        secureTextEntry
                        className="mt-7"
                    />

                    <TouchableOpacity
                        className="mt-7 w-80 bg-purple-800 items-center justify-center h-10 rounded-md"
                        onPress={createNewUser}
                    >
                        <Text
                            className="text-white text-xl"
                            style={{ fontFamily: 'Roboto_700Bold' }}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleMoveToSignIn}>
                        <Text
                            className="underline mt-8 text-base"
                            style={{ fontFamily: 'Roboto_700Bold' }} >
                            Já tem uma conta?
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}