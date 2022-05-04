import { Text, Pressable } from 'react-native';
import tw from 'twrnc';


export default function Button({ text, onPress, style }) {
    return (
        <Pressable onPress={onPress} style={tw`py-4 px-6 rounded-lg ${ style ? style : "bg-white"}`}>
            <Text style={tw`font-medium text-lg text-center text-gray-900`}>
                {text}
            </Text>
        </Pressable>
    )
}