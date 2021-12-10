import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, TouchableOpacity, View} from "react-native";
import { Button, Input, Text, } from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Opret bruger",
            headerBackTitle: "Tilbage",
        })
    }, [navigation])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Tilbage til Login",
        });
    }, [navigation])

    const register = () => {
        getAuth()
            createUserWithEmailAndPassword(auth, email, password)
            .then(updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: imageUrl,
            }).catch((error)))
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>
                Opret bruger
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    style={styles.inputContainer}
                    placeholder="Fuldt navn"
                    autoFocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    style={styles.inputContainer}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    style={styles.inputContainer}
                    placeholder="Adgangskode"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    style={styles.inputContainer}
                    placeholder="Profilbillede URL (Frivilligt)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>
            <TouchableOpacity>
            <Button
                style={styles.button}
                onPress={register}
                title="Opret bruger og login"
                />
            </TouchableOpacity>
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 250,
        marginTop: 10,
    },
});
