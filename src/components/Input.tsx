import { TextInputProps } from "react-native";
import { TextInput } from "react-native";

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="w-full h-16 border-2 rounded-md p-2 text-md bg-gray-300"
            {...rest}
        />
    )
}