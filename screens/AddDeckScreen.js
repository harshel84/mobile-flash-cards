import React from 'react'
import { Text, TextInput, Button, View , StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Add_Deck } from '../actions/index'

class AddDeckScreen extends React.Component {
  constructor(props){
	  super(props);
	  this.state = {
		  name : "",
		  isDeckNameValid : true 
	  }
  }
  
  CreateDeckClick = () => {
	if(this.state.name !== ""){
		let deck = {
			id : this.props.decks.length + 1, 
			name : this.state.name, 
			cards : []
		}
		this.props.dispatch(Add_Deck(deck));
		this.props.resetState();
		this.props.navigation.navigate('DeckDetails', {deck : deck});
	}
	else {
		this.setState({isDeckNameValid : false});
	}
  }
  
 render() {
	return (
		<View>
			<Text style={styles.item}>What is the title of your new deck ?</Text>
			<TextInput placeholder="Deck Name" style={styles.textInput}
			onChangeText={(name)=> this.setState({name : name, isDeckNameValid : true})}></TextInput>
			{!this.state.isDeckNameValid && (
			<Text style={styles.error}>Please provide the deck name.</Text>
			)}
			<View style={styles.item}>
				<Button title="Create Deck" color="#841584" onPress={this.CreateDeckClick} />
			</View>
		</View>
    );
  }
}

function mapStateToProps ({decks}) {
	return {
		decks:decks
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
	item : {
		paddingTop : 20,
		paddingBottom : 30
	}, 
	error : {
		paddingBottom : 10, 
		color : "red"
	}, 
	textInput : {
		borderColor : 'gray', 
		borderWidth : 1, 
		marginBottom : 30,
		width : 150, 
		textAlign : 'center'
	}
});

export default connect(mapStateToProps)(AddDeckScreen)