import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { Header } from "../../partials/header/Header";

export class Profile extends React.Component{

    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View style={styles.container} >
                <View style={{ height: '25%'}} >
                    <Header title="Janae Hartley"/>
                </View>                
                <View style={{ height: '75%'}} >
                    <View style={[styles.headerText, {width: '90%', alignSelf: 'center'}]}>
                        <Text style={{paddingTop: 80, fontSize: 24, color: "#44B0B2"}}> Personal </Text>
                    </View>
                </View>
                <Transition shared="profilePic">
                    <View style={styles.profileOutline}>
                        <Image  source={{uri:'https://image.ibb.co/gSR7Tz/cutmypic_1.png'}} 
                            style={styles.profilePic}/>
                    </View>
                </Transition>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1
    },
    profileOutline:{
        flex: 1,
        position: 'absolute',
        height: 90,
        width: 90,
        borderRadius: 90/2,
        backgroundColor: '#fff',
        top: 115,
        left: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 80/2,
    },
    headerText: {
        color: '#44B0B2',
        fontSize: 24,
        paddingLeft: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#44B0B2',
    }
})