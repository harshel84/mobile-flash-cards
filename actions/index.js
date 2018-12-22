import { ADD_DECK, SELECT_DECK, RECIEVE_DECKS, ADD_CARD, DELETE_DECK } from './constants' 

export const Recieve_Decks = (decks) => {
	return {
		type : RECIEVE_DECKS, 
		decks
	}
}

export const Add_Deck = (deck) => {
	return {
		type : ADD_DECK, 
		deck
	}
}

export const Delete_Deck = (id) => {
	return {
		type : DELETE_DECK, 
		id
	}
}

export const Select_Deck = (deck) => {
	return {
		type : SELECT_DECK, 
		deck
	}
}

export const Add_Card = (card, id) => {
  return {
	  type : ADD_CARD, 
	  card,
	  id 
  }
}