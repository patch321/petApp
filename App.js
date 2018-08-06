import React from 'react';
import { StyleSheet } from 'react-native';
import { FluidNavigator } from "react-navigation-fluid-transitions";
import { Dashboard } from "./views/dashboard/Dashboard.js";
import { Profile } from "./views/profile/Profile.js";
import { ProfileEdit } from './views/profile-edit/ProfileEdit.js';
import { PetSelection } from "./views/pet-selection/PetSelection.js";

const Navigator = FluidNavigator({
	DashboardRT: { screen: Dashboard },
	ProfileRT: { screen : Profile},
	ProfileEditRT: { screen: ProfileEdit},
	PetSelectionRT: { screen: PetSelection }
},{

})

export default class App extends React.Component {
	render() {
		return (
			<Navigator />
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
