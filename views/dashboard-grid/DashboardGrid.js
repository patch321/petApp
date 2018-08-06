import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export class DashboardGrid extends React.Component{

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={styles.container}>
        
            {/* First Row */}
                <View style={{flexDirection: 'row', height: '33%'}}>
                    <TouchableOpacity style={styles.gridButton} onPress={() => this.props.navigation.navigate('ProfileRT')}> 
                        <Image  source={ require('./contacts.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridButton} onPress={() => this.props.navigation.navigate('PetSelectionRT')} > 
                        <Image  source={ require('./paw.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            pets
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridButton}> 
                        <Image  source={ require('./droplet.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            donations
                        </Text>
                    </TouchableOpacity>
                </View>

            {/* Second Row */}
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.gridButton}> 
                        <Image  source={ require('./calendar.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            appointments
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridButton}> 
                        <Image  source={ require('./clinic.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            vets
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridButton}> 
                        <Image  source={ require('./warning.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            notifications
                        </Text>
                    </TouchableOpacity>
                </View>

            {/* Third Row */}
                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.gridButton}> 
                        <Image  source={ require('./marker.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            near me
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridButton}> 
                        <Image  source={ require('./badge.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            badges
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gridButton}> 
                        <Image  source={ require('./settings.png')} 
                                style={{alignSelf: 'center'}}
                        />
                        <Text style={styles.buttonText}>
                            settings
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    gridButton: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15
    },
    buttonText: {
        color: '#44B0B2',
        alignSelf: 'center',
        marginTop: 10
    }
})