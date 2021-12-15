import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { db, deleteDoc, } from "../firebase";

const JobScreen = ({ navigation , route}) => {

    /*function handleChange (e) {
        e.persist();

        setTimeout(() => {
            console.log(e.target.value);
        }, 10000000);
    }

    useEffect(() => {
        return () => {}
    });*/

    const deleteJob = async () => {
        try {
            const docRef = await deleteDoc(db.collection(db).collection('jobs').doc(route.params.id));
        } catch (e) {
            //console.log('Error deleting: ', e);
        }
        navigation.replace('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.jobText}> Arbejdsgiver: {route.params.employer} </Text>
            <Text style={styles.jobText}> Titel: {route.params.title} </Text>
            <Text style={styles.jobText}> Beskrivelse: {route.params.desc} </Text>
            <Text style={styles.jobText}> Adresse: {route.params.address} </Text>
            <Text style={styles.jobText}> Arbejdstimer: {route.params.hours} </Text>
            <Text style={styles.jobText}> Løn: {(route.params.hours * 146.34).toFixed(2)} kr. </Text>
            <Button style={{margin: 15}}title="Søg job" onPress={deleteJob}> Søg job </Button>
        </View>
    )
}

export default JobScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    jobText: {
        fontSize: 20,
        margin: 15,
    }
})
