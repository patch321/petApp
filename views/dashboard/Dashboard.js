import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DashboardGrid } from "../dashboard-grid/DashboardGrid";
import { Header } from "../../partials/header/Header";

export class Dashboard extends React.Component{

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{height: '25%'}}>
                    <Header style={{ height: '25%'}} />
                </View>
                <View backgroundColor="#fff" height='25%' >
                    <Text style={styles.nameLabel}>
                        Janae Hartley
                    </Text>
                </View>
                <DashboardGrid style={{height: '50%'}} navigation={ this.props.navigation } />
        {/* Profile Picture */}
                    <View style={styles.profileOutline}>
                        <Image  source={{uri:'https://image.ibb.co/gSR7Tz/cutmypic_1.png'}} 
                            style={styles.profilePic}/>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileOutline:{
        flex: 1,
        position: 'absolute',
        height: 180,
        width: 180,
        borderRadius: 180/2,
        backgroundColor: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: 60
    },
    profilePic: {
        height: 160,
        width: 160,
        borderRadius: 160/2,
    },
    nameLabel: {
        paddingTop: 100,
        alignSelf: 'center',
        fontSize: 36,
        color: "#707070"
    }
})