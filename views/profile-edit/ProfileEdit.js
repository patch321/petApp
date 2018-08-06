import React from "react";
import { Text, TextInput, View, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { Header } from "../../partials/header/Header";
import { FontAwesome } from "@expo/vector-icons";

export class ProfileEdit extends React.Component {
    static navigationOptions = {
        header: null
	}
	
	onSave(){

	}

	onCancel(){

	}

    render() {
        return (
            <View style={{}}>
                <View style={{ height: '25%' }}>
                    <Header navigation={this.props.navigation} />
                </View>
                <View style={{ height: '10%' }} ></View>
				<ScrollView style={{ height: '65%', paddingTop: 40 }}>
					<View style={[styles.infoRow, { width: '90%' }]}>
						<Text style={{ color: '#44B0B2', fontSize: 20 }} >Profile Picture</Text>
						<Text style={{ color: "#44B0B2", fontSize: 20 }} >
                            Change <FontAwesome name="chevron-right" />
                        </Text>
					</View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >First Name</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }} >Janae</TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >Last Name</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }} >Hartley</TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >Address</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }} >4225 SE 46th St</TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >City</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }} >Oklahoma City</TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >Zip</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }}
                            keyboardType='numeric' >
                            73135
                            </TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >State</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }} >OK</TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >Phone</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }}
                            keyboardType='numeric'>
                            (405) 606-1983
                            </TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >Email</Text>
                        <TextInput style={{ color: "#707070", fontSize: 20 }}
                            keyboardType='email-address'>
                            JanaeKHartley@gmail.com
                            </TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >Password</Text>
                        <Text style={{ color: "#44B0B2", fontSize: 20 }} >
                            Change <FontAwesome name="chevron-right" />
                        </Text>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 20 }} >Account Level</Text>
                        <Text style={{ color: "#44B0B2", fontSize: 20 }} >
                            Upgrade to Pro <FontAwesome name="chevron-right" />
                        </Text>
                    </View>

                    <View style={{ paddingBottom: 60 }} >
                        <TouchableOpacity   onPress={ () => this.props.navigation.navigate('ProfileRT') } style={styles.saveButton}>
                            <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }} >Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigation.navigate('ProfileRT') } style={styles.cancelButton}>
                            <Text style={{ color: '#44B0B2', fontSize: 20, alignSelf: 'center' }} >Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>



                {/* Profile Pic */}
                <Transition shared="profilePic">
                    <View style={styles.profileOutline}>
                        <Image  source={{uri:'https://image.ibb.co/gSR7Tz/cutmypic_1.png'}} 
                            style={styles.profilePic}/>
                    </View>
                </Transition>
            </View >
        )
    }
}

const styles = StyleSheet.create({
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
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignSelf: 'center',
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        marginBottom: 20
    },
    saveButton: {
        height: 60,
        backgroundColor: '#44B0B2',
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center', 
        justifyContent: 'center',
        marginTop: 40
    },
    cancelButton: {
        height: 60,
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 5,
        alignSelf: 'center', 
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#44B0B2'
    }
})