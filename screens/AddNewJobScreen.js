import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, View} from "react-native";
import { Button, Input } from 'react-native-elements';
import { db, collection, addDoc } from '../firebase';
import DatePicker from 'react-native-datepicker';

const AddNewJobScreen = ({ navigation }) => {
    const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');

   useLayoutEffect(() => {
       navigation.setOptions({
           title: "Tilføj job",
           headerBackTitle: "Jobs",
       })
   }, [navigation])

    const wait = (timeout) => {
       return new Promise(resolve => setTimeout(resolve, timeout))
    }

    const createJob = async () => {
       try{
           const docRef = await addDoc(collection(db, 'jobs'), {
               employer: employer,
               title: title,
               desc: desc,
               address: address,
               date: date,
               hours: hours,
           });
           //await navigation.navigate('Home');
       } catch (e) {
           console.error("Error adding document: ", e);
       }
       wait(1000).then(navigation.replace('Home'));
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Input placeholder='Arbejdsgiver' value={employer} onChangeText={text => setEmployer(text)} />
            <Input placeholder='Jobtitel' value={title} onChangeText={text => setTitle(text)} />
            <Input placeholder='Beskrivelse' value={desc} onChangeText={text => setDesc(text)} />
            <Input placeholder='Adresse' value={address} onChangeText={text => setAddress(text)} />
            <DatePicker
                style={styles.datePicker}
                mode="date"
                format="MM-DD-YYYY"
                minDate="01-01-2020"

                confirmBtnText="Vælg dato"
                cancelBtnText="Luk ned"
                placeholder="Vælg dato"
                date={date}
                onDateChange={setDate}/>
            <Input placeholder='Antal timer' value={hours} onChangeText={number => setHours(number)} onSubmitEditing={createJob} />
            <TouchableOpacity>
                <Button onPress={createJob} title={"Opret nyt job"} style={styles.button}/>
            </TouchableOpacity>
            <View style={{height: 150}}/>
        </KeyboardAvoidingView>
    )
}

export default AddNewJobScreen

const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 30,
            backgroundColor: "white",
            height: "100%",
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
        datePicker: {
            width: 320,
            margin: 5,
            color: '#af81e1',
        }
    });


/*

 */
