import React from 'react';
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import {connect} from 'react-redux'

class DecksScreen extends React.Component { 
   constructor(props){
	super(props);
	this.state = {showLoader : false};
   }

   renderDeck = ({item}) => {  
	return (
	  <View style={styles.item}>
		<TouchableOpacity onPress={() => {this.setState({showLoader : true}); this.props.navigation.navigate('DeckDetails', {deck : item}); this.setState({showLoader : false});}}>
			<Text>{item.name}</Text> 
			<Text>{item.cards.length}</Text>
		</TouchableOpacity>
	  </View>
	  )
   }

   render() {
	return (
		<View>
			{this.props.decks.length === 0 && <Text>There are no decks to display!</Text>}
			<FlatList 
				data={this.props.decks} 
				renderItem={this.renderDeck}
				keyExtractor={(item, index) => index.toString()} />
			<ActivityIndicator 
				hidesWhenStopped="true" 
				animating={this.state.showLoader}
				size="large" color="blue" style={styles.loader} />
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
		paddingBottom : 30,
		alignItems: 'stretch',
		flex : 1
	},
	icon : {
		flex : 1, 
		textAlign : 'center'
	},
	loader: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center'
	  }
});

export default connect(mapStateToProps)(DecksScreen)