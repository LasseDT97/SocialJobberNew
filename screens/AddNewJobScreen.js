import React, {useLayoutEffect, useState} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, View} from "react-native";
import { Button, Input } from 'react-native-elements';
import { db, collection, addDoc } from '../firebase';
import DateTimePicker from '@react-native-community/datetimepicker'

const AddNewJobScreen = ({ navigation }) => {

    const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [hours, setHours] = useState('');

    let today = new Date();
    let currentDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    let currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + '.' + today.getMilliseconds();
    let dateFormat = currentDate + 'T' + currentTime + 'Z';

   useLayoutEffect(() => {
       navigation.setOptions({
           title: "Tilføj job",
           headerBackTitle: "Jobs",
       })
   }, [navigation])

    const createJob = async () => {
       try{
           const docRef = await addDoc(collection(db, 'jobs'), {
               employer: employer,
               title: title,
               desc: desc,
               address: address,
               date: date.toString(),
               time: time.toString(),
               hours: hours,
           });
           //await navigation.navigate('Home');
       } catch (e) {
           console.error("Error adding document: ", e);
       }
       console.log(date);
       console.log(time);
       navigation.replace('Home');
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Input placeholder='Arbejdsgiver' value={employer} onChangeText={text => setEmployer(text)} />
            <Input placeholder='Jobtitel' value={title} onChangeText={text => setTitle(text)} />
            <Input placeholder='Beskrivelse' value={desc} onChangeText={text => setDesc(text)} />
            <Input placeholder='Adresse' value={address} onChangeText={text => setAddress(text)} />
            <Input placeholder='Antal timer' value={hours} onChangeText={number => setHours(number)} />
            <View style={{flexDirection: "row", marginLeft: 5}}>
                <View style={{flex: 1}}>
                <Text style={styles.dateText}> Dato og tidspunkt</Text>
                </View>
            </View>
            <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
                <DateTimePicker
                    style={styles.datePicker}
                    mode="date"
                    date={date}
                    value={dateFormat}
                    onDateChange={setDate}/>
                <DateTimePicker
                    style={styles.timePicker}
                    mode="time"
                    time={time}
                    value={dateFormat}
                    onDateChange={setTime}/>
            </View>
            <TouchableOpacity>
                <Button onPress={createJob} title={"Opret nyt job"} style={styles.button}/>
            </TouchableOpacity>
            <View style={{height: 120}}/>
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
        button: {
            width: 250,
            marginTop: 10,
        },
        datePicker: {
            flex: 1,
            flexDirection: 'row',
            width: 200,
        },
        timePicker: {
            justifyContent: "space-evenly",
            marginVertical: 10,
            width: 200,
            margin: 11,
        },
        dateText: {
            color: "grey",
            fontSize: 18,
            textAlign: "left",
        }
    });
