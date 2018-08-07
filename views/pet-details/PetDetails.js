import React from "react";
import { Text, TextInput, View, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from "react-native";
import { Header } from "../../partials/header/Header";
import { FontAwesome } from "@expo/vector-icons";

export class PetDetails extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ height: '25%' }}>
                    <Header title="Poe" editMode="true" secondaryButtonPath="PetDetailsRT" navigation={this.props.navigation} />
                </View>
                <ScrollView style={{ backgroundColor: '#fff', height: '75%' }} >
                    <View style={[styles.headerText, { width: '90%', alignSelf: 'center' }]}>
                        <Text style={{ paddingTop: 60, fontSize: 24, color: "#44B0B2" }}> General </Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Breed</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >Austrailian - Mix</Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Age</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >3 months</Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Gender</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >Male</Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Weight</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >6.5 lbs</Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Color</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >Black</Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Secondary Color</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >White</Text>
                    </View>

                    <View style={[styles.headerText, {width: '90%', alignSelf: 'center'}]}>
                        <Text style={{paddingTop: 40, fontSize: 24, color: "#44B0B2"}}> Account Info </Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Spayed/Nuetered</Text>
                        <Text style={{ color: "#707070", fontSize: 15 }} >No</Text>
                    </View>

                </ScrollView>

                {/* Profile Pic */}
                <View style={styles.profileOutline}>
                    <Image source={require('../pet-selection/poe.png')}
                        style={styles.profilePic} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileOutline: {
        flex: 1,
        position: 'absolute',
        height: 90,
        width: 90,
        borderRadius: 90 / 2,
        backgroundColor: '#fff',
        top: 115,
        left: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
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