import React, { useEffect, useLayoutEffect, useState, useCallback } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, RefreshControl } from "react-native";
import CustomListItem from "../components/CustomListItem";
import CustomCard from "../components/CustomCard";
import {Avatar, Card} from "react-native-elements";
import { collection, db, getDocs } from '../firebase';
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { getAuth, signOut } from "firebase/auth";
import { AsyncStorage } from "@react-native-async-storage/async-storage";

const HomeScreen = ({navigation}) => {
    const [jobs, setJobs] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout))
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    const auth = getAuth();

    useEffect(async () => {
            const querySnapshot = await getDocs(collection(db, "jobs"));
            querySnapshot.forEach((doc) => {
                setJobs(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            });
            return querySnapshot
        }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Jobs",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{marginLeft: 20}}>
                </View>
            ),
            headerRight: () => (
                <View
                    style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}
                >
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="plus" size={28} onPress={() => navigation.navigate('Tilføj job')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profil")}
                        activeOpactity={0.5}>
                        <AntDesign name="ellipsis1" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation])

    const enterJob = (id, employer, title, desc, address, datetime, hours) => {
        navigation.navigate("Job", {
            id,
            employer,
            title,
            desc,
            address,
            datetime,
            hours,
        });
    };

    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh} />
                }>
                {jobs.map(({id, data: { employer, title, desc, address, datetime, hours}}) => (
                    <CustomCard
                        key={id}
                        id={id}
                        employer={employer}
                        title={title}
                        desc={desc}
                        address={address}
                        datetime={datetime}
                        hours={hours}
                        enterJob={enterJob}
                    />
                ))}

            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 250,
        marginTop: 10,
    },
});

/*
{jobs.map(({id, data: { employer, title, desc, address, datetime}}) => (
                            <CustomListItem
                                key={id}
                                id={id}
                                employer={employer}
                                title={title}
                                desc={desc}
                                address={address}
                                datetime={datetime}
                                hours={hours}
                                enterJob={enterJob}
                            />
                        ))}
 */
