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
                    <Header title="Janae Hartley" editMode="true" editPath="ProfileEditRT" navigation = { this.props.navigation } />
                </View>                
                <View style={{ height: '75%'}} >
                    <View style={[styles.headerText, {width: '90%', alignSelf: 'center'}]}>
                        <Text style={{paddingTop: 60, fontSize: 24, color: "#44B0B2"}}> Personal </Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >First Name</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >Janae</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Last Name</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >Hartley</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Address</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >4225 SE 46th St</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >City</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >Oklahoma City</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Zip</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >73135</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >State</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >OK</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Phone</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >(405) 606-1983</Text>
                    </View>

                    <View style={[styles.headerText, {width: '90%', alignSelf: 'center'}]}>
                        <Text style={{paddingTop: 40, fontSize: 24, color: "#44B0B2"}}> Account Info </Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Email</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >JanaeKHartley@gmail.com</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Password</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >*****</Text>
                    </View>
                    <View style={[styles.infoRow, {width: '90%'}]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Account Level</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >Free</Text>
                    </View>
                </View>
        
        {/* Profile Pic */}
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
        paddingLeft: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#44B0B2',
    }, infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingTop: 10
    }
})