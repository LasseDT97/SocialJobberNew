import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import {Card, Avatar, Button} from 'react-native-elements';

const CustomCard = ({ id, employer, title, desc, address, hours, enterJob}) => {

    return (
        <Card onPress={() => enterJob(id, employer, title, desc, address, hours)} key={id} >
            <Card.Title>{title}</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../assets/SOCIALJOBBERlogo.png')} style={{resizeMode: 'contain', height: 50}}/>
                <Text style={{marginBottom: 5, marginTop: 10}}> Virksomhed: {employer} </Text>
                <Text style={{marginBottom: 5}}> Opgave: {title} </Text>
                <Text style={{marginBottom: 10}}> Løn/timer: {hours} timer, Løn: {(hours * 146.34).toFixed(2)} kr. </Text>

        </Card>
    )
}

export default CustomCard;
/*
<Button style={{borderRadius: 0, marginLeft: 0, marginRight:0, marginBottom:0 }}title='Se mere' onPress={enterJob}/>
 */
