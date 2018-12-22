import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import DeckDetailsScreen from './screens/DeckDetailsScreen'
import AddCardScreen from './screens/AddCardScreen'
import QuizScreen from './screens/QuizScreen'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import decks from './reducers/decks'
import middleware from './middleware'
import setLocalNotificationForTomorrow from './utils/helper'

const Stack = createStackNavigator({
	Home: {
		screen: HomeScreen, 
		navigationOptions : {
			title : "Decks"
		}
	},
	DeckDetails: {
		screen : DeckDetailsScreen, 
		navigationOptions : ({ navigation }) => ({
			title: `${navigation.state.params.deck.name}`
		  })
	},
	AddCard: {
		screen : AddCardScreen, 
		navigationOptions : {
			title: "Add Card"
		}
	},
	Quiz : {
		screen : QuizScreen,
		navigationOptions : {
			title: "Quiz"
		}
	}
},{
	defaultNavigationOptions :{
		header: {
			titleStyle: {
			   textAlign: 'center',
			},
		 },
	}
})

export default class App extends React.Component {

  componentDidMount(){
	setLocalNotificationForTomorrow();
  }
  render() {
	return (
	<Provider store={createStore(decks, middleware)}>
		<Stack/>
	</Provider>)
  }
}