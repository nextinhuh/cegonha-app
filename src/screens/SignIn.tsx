import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Input } from "../components/Input";

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    function createNewUser(): void {
        createUserWithEmailAndPassword(auth, email, password)
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
            });
    }

    return (
        <View className="flex-1 bg-slate-50">
            <View className="flex items-center justify-center relative h-3/5 w-full bg-purple-700">
                <Text>Cegonha</Text>

                <View
                    className="relative bg-white h-2/4 items-center justify-center w-96 rounded-3xl p-8 shadow-2xl"
                    style={{ elevation: 2 }}
                >
                    <Input
                        placeholder="E-mail"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <Input
                        placeholder="Senha"
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />

                    <TouchableOpacity
                        className="mt-3 w-full bg-red-300 items-center justify-center h-10 rounded-md"
                        onPress={createNewUser}
                    >
                        <Text>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text className="underline text-red-500 mt-8" >
                            Não tem uma conta? Registre-se
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}