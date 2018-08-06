import React from "react";
import { Text, TextInput, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { Header } from "../partials/header/Header";

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
                <View style={{ height: '12%' }} ></View>
				<ScrollView style={{ height: '65%', paddingTop: 40 }}>
					<View style={[styles.infoRow, { width: '90%' }]}>
						<Text style={{ color: '#44B0B2', fontSize: 20 }} >Profile Picture</Text>
						<Text style={{ color: "#44B0B2", fontSize: 20 }} >Change</Text>
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
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Email</Text>
                        <TextInput style={{ color: "#707070", fontSize: 15 }}
                            keyboardType='email-address'>
                            JanaeKHartley@gmail.com
                            </TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Password</Text>
                        <TextInput style={{ color: "#707070", fontSize: 15 }} >*****</TextInput>
                    </View>
                    <View style={[styles.infoRow, { width: '90%' }]}>
                        <Text style={{ color: '#44B0B2', fontSize: 15 }} >Account Level</Text>
                        <TextInput style={{ color: "#707070", fontSize: 15 }} >Free</TextInput>
                    </View>

                    <View style={{ paddingBottom: 120 }} >
                        <Button title='Save' onPress={this.onSave}></Button>
                        <Button title='Cancel' onPress={this.onCancel}></Button>
                    </View>
                </ScrollView>



                {/* Profile Pic */}
                <Transition shared="profilePic">
                    <View style={styles.profileOutline}>
                        <Image source={{ uri: 'https://image.ibb.co/gSR7Tz/cutmypic_1.png' }}
                            style={styles.profilePic} />
                    </View>
                </Transition>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    profileOutline: {
        flex: 1,
        position: 'absolute',
        height: 180,
        width: 180,
        borderRadius: 180 / 2,
        backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: 60
    },
    profilePic: {
        height: 160,
        width: 160,
        borderRadius: 160 / 2,
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
    }
})