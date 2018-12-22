import React from 'react'
import {Text, TextInput, View, Button, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import { Add_Card } from '../actions/index'

class AddCardScreen extends React.Component {
  constructor(props){
	  super(props);
	  this.state = {
		  question : "",
		  isQuestionValid : true,
		  answer : "",
		  isAnswerValid : true
	  }
  }
  
  SubmitClick = () => {
	if(this.state.answer !== "" && this.state.answer !== ""){
		let card = {
			question : this.state.question,
			answer : this.state.answer
		}
		this.props.dispatch(Add_Card(card, this.props.navigation.state.params.deck.id));
		this.props.navigation.navigate('DeckDetails', {deck : this.props.navigation.state.params.deck});	
	}
	this.setState({isAnswerValid : this.state.answer !== "", 
				   isQuestionValid : this.state.question !== ""});
  }
  
 render() {
	return (
      <View style={styles.view}>
		<View style={styles.mainView}>
			<TextInput placeholder="Question" style={styles.textInput}
			onChangeText={(question)=> this.setState({question : question, isQuestionValid : true})}></TextInput>
			{!this.state.isQuestionValid && (
			<Text style={styles.error}>Enter question.</Text>
			)}
			<TextInput placeholder="Answer" style={styles.textInput}
			onChangeText={(answer)=> this.setState({answer : answer, isAnswerValid : true})}></TextInput>
			{!this.state.isAnswerValid && (
			<Text style={styles.error}>Enter Answer.</Text>
			)}
			<View style={styles.item}>
				<Button title="Submit" color="#841584" onPress={this.SubmitClick} />
			</View>
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
		alignItems: 'center'
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
		marginTop : 20,
		width : 150, 
		textAlign : 'center'
	}
});

export default connect()(AddCardScreen)