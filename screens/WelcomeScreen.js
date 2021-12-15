import React, {useEffect, useLayoutEffect} from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {auth} from "../firebase";
import {Button, Image, } from "react-native-elements";

const WelcomeScreen = ({ navigation }) => {

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            // console.log(authUser)
            if (authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light'/>
            <Image
                source={{uri: "https://i.ibb.co/Thcc1pr/SOCIALJOBBERlogo.png"}}
                style={{resizeMode: "center", height: 125, width: 9999}}
            />
            <View style={styles.inputContainer}>
                <Text h3 style={{ marginBottom: 50, textAlign: "center", lineHeight: 23}}>
                    SocialJobber er et foretagende der sætter fokus på at skabe forbindelse mellem
                    socialt udsatte og virksomheder der har lyst til at bidrage med at give socialt udsatte med
                    et socialt frikort en mulighed for en dagligdag og noget at stå op til, samtidig med at virksomheden
                    får hjælp til deres gøremål.
                </Text>
            </View>
                <TouchableOpacity>
                    <Button containerStyle={styles.button} onPress={() => navigation.navigate('Velkommen SocialJobber')} title="SocialJobber" />
                </TouchableOpacity>
                    <Text style={styles.midText} > -- ELLER -- </Text>
                <TouchableOpacity>
                    <Button containerStyle={styles.button} onPress={() => navigation.navigate('Velkommen virksomhed')} title="Virksomhedsprofil" />
                </TouchableOpacity>
            <View style={{height: 100}} />
        </SafeAreaView>
    )
}

export default WelcomeScreen

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
        marginBottom: 10,
    },
    midText: {
        textAlign: "center",
        padding: 10,
        backgroundColor: "white",
        color: '#a9a9a9',
    }
});
