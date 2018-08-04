import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export class Header extends React.Component{
    
    static navigationOptions = {
        header: null
    }

    render() {
        return(
            <View>
                <View backgroundColor="#75EAEC" height='86%'>
                    <View style={styles.menuButtonContainer}>
                        <Image  source={ require("./menu-4-256.png")}
                                style={styles.menuButton} />
                    </View>
                    <Text style={styles.titleText}>
                        {this.props.title}
                    </Text>
                </View>
                <View backgroundColor="#fff" height='7%'>
                </View>
                <View backgroundColor="#FF8463" height='7%'>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    menuButton: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 12
    },
    menuButtonContainer: {
        height: 60,
        width: 60,
        borderRadius: 80/2,
        borderWidth: 3,
        borderColor: '#fff',
        marginTop: 40,
        marginLeft: 15
    },
    titleText: {
        alignSelf: 'center',
        fontSize: 24,
        color: "#fff"
    }
})
