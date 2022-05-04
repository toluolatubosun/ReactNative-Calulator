import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import tw from 'twrnc';

 /** 
 *  C ( ) /
 *  7 8 9 *
 *  4 5 6 -
 *  1 2 3 +
 *  DEL 0 . =
 * **/

export default function Home(){
    const [text, setText] = React.useState('0');
    const [answer, setAnswer] = React.useState('0');
   
    const Solve = (text) =>{
        console.log(text);
    }

    const HandleClick = (value) =>{
        console.log(value);
    }

    return(
        <View style={tw`bg-gray-100 p-2`}>
            <View style={tw`mx-4 mt-2`}>
                <Text style={tw`text-2xl text-right mb-2`}>
                    {answer}
                </Text>
                <Text style={tw`font-medium break-all text-right`}>{text}</Text>
            </View>

            <View style={tw`flex flex-row justify-around my-4`}>
                <Button 
                    text="C" 
                    onPress={() => HandleClick('C')} 
                />
                <Button
                    text="("
                    onPress={() => HandleClick('(')}
                />
                <Button
                    text=")"
                    onPress={() => HandleClick(')')}
                />
                <Button
                    text="/"
                    onPress={() => HandleClick('/')}
                    style="bg-blue-300"
                />
            </View>

            <View style={tw`flex flex-row justify-around my-4`}>
                <Button
                    text="7"
                    onPress={() => HandleClick('7')}
                />
                <Button
                    text="8"
                    onPress={() => HandleClick('8')}
                />
                <Button
                    text="9"
                    onPress={() => HandleClick('9')}
                />
                <Button
                    text="*"
                    onPress={() => HandleClick('*')}
                    style="bg-blue-300"
                />
            </View>

            <View style={tw`flex flex-row justify-around my-4`}>
                <Button
                    text="4"
                    onPress={() => HandleClick('4')}
                />
                <Button

                    text="5"
                    onPress={() => HandleClick('5')}
                />
                <Button
                    text="6"
                    onPress={() => HandleClick('6')}
                />
                <Button
                    text="-"
                    onPress={() => HandleClick('-')}
                    style="bg-blue-300"
                />
            </View>

            <View style={tw`flex flex-row justify-around my-4`}>
                <Button
                    text="1"
                    onPress={() => HandleClick('1')}
                />
                <Button
                    text="2"
                    onPress={() => HandleClick('2')}
                />
                <Button
                    text="3"
                    onPress={() => HandleClick('3')}
                />
                <Button
                    text="+"
                    onPress={() => HandleClick('+')}
                    style="bg-blue-300"
                />
            </View>

            <View style={tw`flex flex-row justify-around my-4`}>
                <Button
                    text="DEL"
                    onPress={() => HandleClick('DEL')}
                />
                <Button
                    text="0"
                    onPress={() => HandleClick('0')}
                />
                <Button
                    text="."
                    onPress={() => HandleClick('.')}
                />
                <Button
                    text="="
                    onPress={() => Solve(text)}
                    style="bg-blue-300"
                />
            </View>
        </View>
    )
}