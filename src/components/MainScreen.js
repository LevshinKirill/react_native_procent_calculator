import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export const MainScreen = () => {

    const [firstNumber, setFirstNumber] = useState('10');
    const [secondNumber, setSecondNumber] = useState('100');
    const [result, setResult] = useState('')

    const calculateResult = () => {
        setResult((firstNumber * 100) / secondNumber)
    }

    return (
        <View>
            <Text style={styles.inputLabel}>Сколько составляет</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.textInput}
                onChangeText={number => setFirstNumber(number)}
                value={firstNumber}
            />
            <Text style={styles.inputLabel}> % от числа</Text>
            <TextInput
                keyboardType='numeric'
                style={styles.textInput}
                onChangeText={number => setSecondNumber(number)}
                value={secondNumber}
            />
            <Text style={styles.inputLabel}>{'\n'}</Text>
            <Button
                title='Посчитать'
                type='outline'
                onPress={() => {
                    calculateResult();
                }} />  
            <Text style={styles.result}>{result}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 24,
        textAlign: 'center'
    },
    textInput: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 24,
        textAlign: 'center'
    },
    result: {
        fontSize: 50,
        textAlign: 'center'
    }
});
