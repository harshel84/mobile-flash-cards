import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import DecksScreen from './DecksScreen'
import AddDeckScreen from './AddDeckScreen'
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const AddDeck = 'AddDeckScreen'
const Decks = 'DecksScreen'

export default class HomeScreen extends React.Component { 
   constructor(props){
	super(props);
	this.state = {
		activeScreen : "DecksScreen"
	}
	this.resetState = this.resetState.bind(this);
   }

   resetState() {
	   this.setState({activeScreen : Decks});
   }

   render() {
	let activeScreen = this.state.activeScreen;
	let decksScreenColor = (activeScreen === Decks ? "blue" : "green");
	let addDeckScreenColor = (activeScreen === Decks ? "green" : "blue");
	return (
		<View style={styles.container}>
			<View style={styles.mainView}>
				{activeScreen == "DecksScreen" && <DecksScreen navigation={this.props.navigation} />}
				{activeScreen == "AddDeckScreen" && <AddDeckScreen resetState={this.resetState} navigation={this.props.navigation} />}
			</View>	
			<View style={styles.iconsView}>
				<TouchableOpacity style={styles.icon} onPress={() => { this.setState({activeScreen : Decks})}}>
					<Ionicons style={styles.icon} name="md-albums" size={32} color={decksScreenColor} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon} onPress={() => { this.setState({activeScreen : AddDeck})}}>
					<Ionicons style={styles.icon} name="md-add-circle" size={32} color={addDeckScreenColor} />				
				</TouchableOpacity>
			</View>
		</View>
    );
   }
}

let styles = StyleSheet.create({
	container : {
		flex : 1,
		alignItems : 'center',
		flexDirection: 'column'
	}, 
	mainView : {
		flex : 11,
		alignItems: 'stretch'
	},
	iconsView : {
		flex : 1, 
		flexDirection: 'row',
		alignItems : 'center',
		borderWidth: 0.5
	},
	icon : {
		flex : 1, 
		textAlign : 'center'
	},
});