import React from "react";
import { View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native";
import Carousel from 'react-native-snap-carousel';

export class PetSelection extends React.Component {

    static navigationOptions = {
        header: null
    }

    _renderItem({ item, index }) {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('PetDetailsRT')}>
                <View style={{ alignSelf: 'center' }} >
                    <View style={styles.profileOutline}>
                        <Image source={item.imgUrl}
                            style={styles.profilePic} />
                    </View>
                    <Text style={styles.petName} >{item.petName}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#75EAEC' }} >
                <View style={{ marginBottom: 120 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DashboardRT')}>
                        <View style={styles.menuButtonContainer}>
                            <Image source={require("./menu-4-256.png")}
                                style={styles.menuButton} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButtonContainer} onPress={() => this.props.navigation.navigate(this.props.editPath)}>
                        <Image source={require("./plus.png")}
                            style={styles.menuButton} />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: 266 }} >
                        <Carousel
                            data={data}
                            renderItem={this._renderItem.bind(this)}
                            sliderWidth={700}
                            itemWidth={200}
                            inactiveSlideScale={.5}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const data = [
    {
        petName: "Poe",
        imgUrl: require("./poe.png")
    },
    {
        petName: "Finn",
        imgUrl: require("./finn.png")
    },
    {
        petName: "Khaleesi",
        imgUrl: require("./khaleesi.png")
    },
]

const styles = StyleSheet.create({
    profileOutline: {
        flex: 1,
        height: 200,
        width: 200,
        borderRadius: 200 / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        height: 180,
        width: 180,
        borderRadius: 180 / 2,
    },
    petName: {
        color: '#fff',
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 20
    }, menuButton: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 12
    },
    menuButtonContainer: {
        height: 60,
        width: 60,
        borderRadius: 80 / 2,
        borderWidth: 3,
        borderColor: '#fff',
        marginTop: 40,
        marginLeft: 15
    },
    addButton: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 12
    },
    addButtonContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        borderRadius: 80 / 2,
        borderWidth: 3,
        borderColor: '#fff',
        top: 40,
        right: 15
    },
})