# Mobile Flash card Project

* install all project dependencies with `npm install`
* start the development server with `npm start`

# Tested on the Android phone.

## List of files in the project.
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify 	this.
├── package-lock.json # is automatically generated.
├── babel-config.js  # babel configuration for expo
├── .gitignore # Git uses it to determine which files and directories to ignore for        commit.
├── .watchmanconfig # config file for watchman.

├── app.json # configuration file for the applcation. 
├── app.js # main React component for the app. 

├── Screens 
	├── DecksScreen.js # screen which displays the deck list.
	├── DeckDetailsScreen.js # screen which displays details about a deck.
	├── AddDeckScreen.js # screen which displays UI to add a new deck.
	├── AddCardScreen.js # screen to add a new card to the deck.
	├── HomeScreen.js # The home screen for the app. 
	├── QuizScreen.js # Screen for the Quiz.
    └──Actions	
		├── constants.js # all action type constants
		├── index.js # all action type methods.
    └──middleware	
	    ├── index.js # Combines all middleware 
	    ├── logger.js # Logging middleware
	└── reducers
		└── decks.js # Manages the store updates Deck and Cards.
	└── utils
		└── helper.js # all the helper utility methods
	```
