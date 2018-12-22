import React from 'react'
import {Text, View, Button, StyleSheet } from 'react-native'
import setLocalNotificationForTomorrow from '../utils/helper'

export default class QuizScreen extends React.Component {
  constructor(props){
	  super(props);
	  this.state = {
		  currentCard : 1, 
		  showAnswer : false, 
		  correctAnswers : 0
	  }
	  this.CorrectAnswerClick = this.CorrectAnswerClick.bind(this); 
	  this.IncorrectAnswerClick = this.IncorrectAnswerClick.bind(this);
	  this.RestartQuizClick = this.RestartQuizClick.bind(this);
	  this.ShowAnswerClick = this.ShowAnswerClick.bind(this);
	  this.GoBacktoDeckClick = this.GoBacktoDeckClick.bind(this);
	  setLocalNotificationForTomorrow();
  }
  
  ShowAnswerClick() {
	  this.setState({showAnswer : true});
  } 

  GoBacktoDeckClick() {
	this.props.navigation.navigate('DeckDetails', {deck : this.props.navigation.state.params.deck})
  }
 
  IncorrectAnswerClick() { 
	this.setState({
		currentCard : this.state.currentCard + 1, 
		showAnswer : false
	});
  }

  CorrectAnswerClick() { 
	this.setState({
		currentCard : this.state.currentCard + 1, 
		correctAnswers : this.state.correctAnswers + 1,
		showAnswer : false
	});
  }

  RestartQuizClick() {
	  this.setState({
		  currentCard : 1,
		  correctAnswers : 0,
		  showAnswer : false
	  });
  }

 render() {
	let { deck } = this.props.navigation.state.params;
	let { currentCard } = this.state;

	if(deck.cards.length === 0 ) {
		return (<View style={styles.view}>
			<Text style={styles.item}>Sorry you cannot take the quiz because there are no cards in the deck.</Text>
      	</View>)
	}
	else if (currentCard > deck.cards.length){
		return (<View style={styles.view}>
			<Text style={styles.item}>Your Score {this.state.correctAnswers}/{deck.cards.length}</Text>
			<Text style={styles.item}>You have reached the end of the Quiz!</Text>
			<View style={styles.item}>
				<Button title="Restart Quiz" color="#841584" onPress={this.RestartQuizClick} />
			</View>
			<View style={styles.item}>
				<Button title="Go back to Deck" color="#841584" onPress={this.GoBacktoDeckClick} />
			</View>
      	</View>)
	}
	
	return (
		<View style={styles.view}>
			<Text style={styles.item}>{deck.cards[currentCard -1].question}</Text>
			{this.state.showAnswer && (<Text style={styles.item}>{deck.cards[currentCard -1].answer}</Text>)}
			<View style={styles.item}>
				<Button title="Show Answer" color="#841584" onPress={this.ShowAnswerClick} />
			</View>
			<View style={styles.item}>
				<Button title="Correct" color="green" onPress={this.CorrectAnswerClick} />
			</View>
			<View style={styles.item}>
				<Button title="InCorrect" color="red" onPress={this.IncorrectAnswerClick} />
			</View>
			<Text style={styles.item}>Remaining Questions : {deck.cards.length - currentCard}</Text>
		</View>
	)
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