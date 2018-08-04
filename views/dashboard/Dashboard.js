import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DashboardGrid } from "../dashboard-grid/DashboardGrid.js";

export class Dashboard extends React.Component{

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={styles.container}>
                <View backgroundColor="#75EAEC" height='20%'>
                    <Image  source={ require("./menu-4-256.png")}
                            style={styles.menuButton} />
                </View>
                <View backgroundColor="#fff" height='3%'>
                </View>
                <View backgroundColor="#FF8463" height='3%'>
                </View>
                <View backgroundColor="#fff" height='24%'>
                    <Text style={styles.nameLabel}>
                        Janae Hartley
                    </Text>
                </View>
                <DashboardGrid style={{height: '50%'}} />
        
        {/* Profile Picture */}
                <View style={styles.profileOutline}>
                        <Image  source={ require("./profilePic.png")} 
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
    menuButton: {
        height: 40,
        width: 40,
        borderRadius: 0,
        marginTop: 50,
        marginLeft: 30
    }, 
    profileOutline:{
        position: 'absolute',
        height: 200,
        width: 200,
        borderRadius: 200/2,
        backgroundColor: '#fff',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    profilePic: {
        position: 'absolute',
        height: 180,
        width: 180,
        borderRadius: 194/2,
        alignSelf: 'center'
    },
    nameLabel: {
        marginTop: 100,
        alignSelf: 'center',
        fontSize: 36,
        color: "#707070"
    }
})