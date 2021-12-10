import React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from "react-native";
import {Button} from "react-native-elements";
import {db, doc, collection, deleteDoc, getDocs, documentId, addDoc, getDoc} from "../firebase";

const JobScreen = ({ navigation , route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Tilbage til andre jobs',
        })
    }, [navigation])


    const deleteJob = async () => {
        try {
            const docRef = await deleteDoc(doc(db, 'jobs', route.params.id))
        } catch (e) {
            console.log('Error deleting: ', e);
        }
        navigation.replace('Home');
    };

    return (
        <View style={styles.container}>
            <Text>{route.params.id}</Text>
            <Text>{route.params.employer}</Text>
            <Text>{route.params.title}</Text>
            <Text>{route.params.desc}</Text>
            <Text>{route.params.address}</Text>
            <Text>{route.params.datetime}</Text>
            <Text>{route.params.hours}</Text>
            <Button title="Søg job" onPress={deleteJob}> Søg job </Button>
        </View>
    )
}

export default JobScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
