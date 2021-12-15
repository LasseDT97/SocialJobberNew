import React from 'react';
import { Text, TouchableOpacity, } from "react-native";
import {Card, Button} from 'react-native-elements';

const CustomCard = ({ id, employer, title, desc, address, hours, enterJob}) => {

    return (
        <TouchableOpacity key={id} onPress={() => enterJob(id, employer, title, desc, address, hours)}>
            <Card>
                <Card.Title>{title}</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('../assets/SOCIALJOBBERlogo.png')} style={{resizeMode: 'contain', height: 50}}/>
                    <Text style={{marginBottom: 5, marginTop: 10}}> Virksomhed: {employer} </Text>
                    <Text style={{marginBottom: 5}}> Opgave: {title} </Text>
                    <Text style={{marginBottom: 10}}> Løn/timer: {hours} timer, Løn: {(hours * 146.34).toFixed(2)} kr. </Text>
                    <Button style={{borderRadius: 0, marginLeft: 0, marginRight:0, marginBottom:0 }}title='Se mere' onPress={() => enterJob(id, employer, title, desc, address, hours)}/>
            </Card>
        </TouchableOpacity>
    )
}

export default CustomCard;
