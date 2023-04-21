import { TextInputProps } from "react-native";
import { TextInput } from "react-native";

export function Input({ ...rest }: TextInputProps) {
    return (
        <TextInput
            className="w-80 h-16 border-b-2 border-b-purple-400 rounded-md p-2 text-md bg-slate-100"
            {...rest}
        />
    )
}