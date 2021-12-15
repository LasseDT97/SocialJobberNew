import React, { useState} from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { getAuth, onAuthStateChanged, signOut, updateProfile, } from "firebase/auth";
import { Avatar, Button, Input } from "react-native-elements";

const ProfileScreen = ({navigation}) => {

    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            //console.log(uid);
        } else {
            console.log('User is signed out')
        }
    });

    const [displayName, setDisplayName] = useState(user.displayName);
    const [email, setEmail] = useState(user.email);
    const [imageUrl, setImageUrl] = useState(user.photoURL);
    const [password, setPassword] = useState('');

    const updateUser = async () => {
        await updateProfile(auth.currentUser, {
            displayName: displayName,
            email: email,
            photoURL: imageUrl,
            password: password,
        }).then(() => {
            console.log('User updated');
        }).catch((error) => {
            console.log('Error: ',error);
        })
    };

    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace('Velkommen')
        });
    };


    return (
        <ScrollView style={{height: "100%", backgroundColor: "white"}}>
            <KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <Avatar size="large" rounded source={{ uri: auth?.currentUser?.photoURL || "https://i.ibb.co/zfssFjN/SOCIALJOBBERlogo.png"}} />
                <View style={{height: 10}}/>
                <Input
                    style={styles.inputContainer}
                    placeholder={user.displayName}
                    autoFocus
                    type="text"
                    value={displayName}
                    onChangeText={(text) => setDisplayName(text)}
                />
                <Input
                    style={styles.inputContainer}
                    placeholder={user.email}
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    style={styles.inputContainer}
                    placeholder="Ny adgangskode"
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
                    onSubmitEditing={updateUser}
                />

                <TouchableOpacity>
                    <Button containerStyle={styles.button} onPress={() => navigation.navigate('Home')} title="Opdater Profil" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Button containerStyle={styles.button} onPress={signOutUser} type="outline" title="Log ud" />
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 250,
        marginTop: 10,
    },
    avatar: {

    }
})
