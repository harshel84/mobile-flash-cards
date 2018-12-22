import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Delete_Deck } from '../actions/index'

const Decks = 'DecksScreen'
class DeckDetailsScreen extends React.Component {
 
 StartQuizClick = () => {
	this.props.navigation.navigate('Quiz', { deck : this.props.navigation.state.params.deck});
 }

 DeleteDeckClick = () => {
	this.props.dispatch(Delete_Deck(this.props.navigation.state.params.deck.id));
	this.props.navigation.navigate('Home', {activeScreen : Decks});
 }

 render() {
	return (
      <View style={styles.view}>
		<Text>{this.props.navigation.state.params.deck.name}</Text> 
		<Text style={styles.item}>{this.props.navigation.state.params.deck.cards.length} Cards</Text>
		<View style={styles.item}>
			<Button title="Add Card" color="#841584" onPress={() => this.props.navigation.navigate('AddCard', {deck : this.props.navigation.state.params.deck})} />
		</View>	
		<View style={styles.item}>
			<Button title="Start Quiz" color="#841584" onPress={this.StartQuizClick}/>
		</View>
		<View style={styles.item}>
			<Button title="Delete Deck" color="#841584" onPress={this.DeleteDeckClick}/>
		</View>
      </View>
    );
  }
 }

let styles = StyleSheet.create({
	view : {
		flex : 1,
		alignItems : 'center',
		padding : 30
	}, 
	item : {
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
		alignItems : 'center'
	}
});

export default connect()(DeckDetailsScreen)