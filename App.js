import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { Dashboard } from "./views/dashboard/Dashboard.js";

const RootStack = createStackNavigator({
	Dashboard: {
		screen: Dashboard
	}
})

export default class App extends React.Component {
	render() {
		return (
			<RootStack />
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
