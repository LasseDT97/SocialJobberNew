import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, employer, title, desc, address, datetime ,hours ,enterJob}) => {
    return (
        <ListItem onPress={() => enterJob(id, employer, title, desc, address, datetime, hours)} key={id} bottomDivider >
            <Avatar
               rounded
                source={{
                    uri:
                "https://i.ibb.co/zfssFjN/SOCIALJOBBERlogo.png"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "700"}}>
                    {employer}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={8} elippsismode="tail">
                    {title}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem;
