import React, {useEffect, useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Button, Input, } from "react-native-elements";
import { auth } from "../firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const LoginScreenSocialJobber = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Velkommen virksomhed",
            headerBackTitle: "Tilbage",
        })
    }, [navigation])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            // console.log(authUser)
            if (authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    }, []);

    const signIn = () => {
        getAuth();
        signInWithEmailAndPassword(auth, email, password).catch(error => alert(error));
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style='light'/>
            <Text style={styles.companyText} >
                Velkommen til virksomhedsprofil. Du kan enten logge ind på din nuværende bruger eller, hvis du
                ikke har en bruger; oprette en ny. Vi håber du har lyst til at hjælpe socialt udsatte med at finde
                arbejde og på den måde hjælpe dem til at tjene lidt penge ved siden af deres forsørgelse og
                derigennem hjælpe dem til en bedre hverdag. Tak fordi I er med!
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>
            <TouchableOpacity>
                <Button containerStyle={styles.button} onPress={signIn} title="Login" />
                <Button onPress={() => navigation.navigate('Opret bruger')} containerStyle={styles.button} type="outline" title="Opret bruger" />
            </TouchableOpacity>
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreenSocialJobber

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
    companyText: {
        textAlign: "center",
        padding: 10,
        backgroundColor: "white",
        lineHeight: 23,
        width: 350,
    },
    button: {
        width: 250,
        marginTop: 10,
    },
});
