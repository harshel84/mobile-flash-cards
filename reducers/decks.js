import { ADD_DECK, SELECT_DECK, RECIEVE_DECKS, ADD_CARD, DELETE_DECK } from '../actions/constants' 

const initialState = {
	decks : [
		{ 
		  id : 1,
		  name : "Deck 1", 
		  cards : [{id : 1, question : "To which language is Portuguese closely related?", answer : "Spanish"}, 
				   {id : 2, question : "What is the meaning of the following abbreviation: IBM?", answer : "International Business Machines"}
		  		  ]}]
}

export default function decks(state = initialState, action) {
	switch(action.type){
		case RECIEVE_DECKS :
		  return {
			  ...state,
			  decks : [...state.decks, ...action.decks]
		  }
		case SELECT_DECK :
		  return {
			  ...state, 
			  currentDeckId : action.deck.id
		  }
		case ADD_DECK : 
			return {
				...state, 
				decks : [...state.decks, action.deck]
			}
		case DELETE_DECK :
		    return {
				...state, 
				decks : state.decks.filter(deck => deck.id !== action.id)
			}
		case ADD_CARD :
			let deck = state.decks.find((deck) => (deck.id === action.id));
			let allExceptedSelectedDecks = state.decks.filter((deck) => deck.id !== action.id);
			deck.cards = [...deck.cards, action.card];
			return {
				...state, 
				decks : [...allExceptedSelectedDecks, deck]
			}
		default :
			return state;
	}
}

