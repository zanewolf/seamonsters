import React, {useState,useEffect} from 'react'
import useShuffle from '../utils/useShuffle'
import GameDeck from "./GameDeck";

function Shuffle(array) {

    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;


}

function generateGameDeck(gameCards,numCards){

    let selectedCards = gameCards.slice(0,numCards) // randomly shuffle and select subset
    let duplicatedCards = [...selectedCards] //duplicate
    let readyDeck = selectedCards.concat(duplicatedCards) // one more shuffle to randomize placement
    return readyDeck
}

export default function Gameboard({cards,diffLevel, gameState,setGameState}) {
    const [score,setScore] = useState(0) // this should live here if I want to display the score on the Won Page
    const [highScores, setHighScores] = useState({})

    // const gameCards = fabData
    // const gameCards = useContext(DataContext)

    // shuffle which cards are chosen, and then shuffle the order of the duplicated card deck
    let gameCardsReady = Shuffle(generateGameDeck(Shuffle(cards),diffLevel/2))

    return (
        <>
            {!gameState &&
                <div className="game">
                    <div className={"game-board"}>
                        {/*{cards}*/}
                        <GameDeck
                            cards={gameCardsReady}
                            setGameState={setGameState}
                            setScore={setScore}
                            diffLevel={diffLevel}
                        />
                    </div>
                </div>
            }
            {gameState &&
                <div className={"center-text"}>
                    <h2>YOU WON!</h2>
                    <h4 className={"bmargin-2"}> Score: {score}</h4>
                </div>}
        </>
    );
}

