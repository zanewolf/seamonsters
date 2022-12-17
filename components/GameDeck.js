import React,{useState,useEffect} from 'react'
import * as R from 'ramda'
import Card from "./Card";

let f //yes, let f

export default function GameDeck ({cards,setGameState,setScore,diffLevel}){

    const [flippedArray, setFlippedArray] = useState(Array(cards.length).fill(false))
    const [matchedArray, setMatchedArray] = useState(Array(cards.length).fill(false))
    const [flippedCount, setFlippedCount] = useState(0) // for determining score?
    const [buttonDisabled, setButtonDisabled]= useState(false)



    // end of game condition
    useEffect(()=>{
        setTimeout(()=>{
            if(matchedArray.every(e=>e===true)){
                setGameState(true)
                calculateScore(flippedCount)
            }
        },750)

    },[matchedArray])

    const calculateScore=(flippedCount)=>{
        let multiplier = diffLevel===6 ? 2 : diffLevel===9 ? 1 : 0.5
        // let extraTime= Math.round((finishTime-startTime)/2500-window.innerWidth/1000)-(diffLevel*2) //shave off time if screen is bigger
        let extraFlip=(flippedCount-diffLevel)
        let calcScore = 100 + diffLevel - extraFlip*multiplier
        console.log(flippedCount, extraFlip, calcScore)


        // total time - minimum amount of time necessary to flip all cards, divided by 2 => penalizes those who take more time
        // but time is weighted less than number of extra flips
        // so if you take longer but only have a few extra clips above the bare minimum, your score with be lower than someone that clicked a lot in a very short amount of time
        setScore(calcScore <= 0 ? 0 : calcScore >= 100 ? 100 : calcScore)


    }


    const checkMatch=(i1,id1,i2,id2)=>{
        if (id1===id2){
            const newMatched=[...matchedArray]
            newMatched[i1]=true
            newMatched[i2]=true
            setMatchedArray(newMatched)
            setButtonDisabled(false)
        } else {
            flipCardsDown(i1,i2)
        }
    }

    const curriedCheckMatch=R.curry(checkMatch) // oh hey look at that!

    const flipCardsDown=(i1,i2)=>{
        // needs to be behind a time delay otherwise it happens so quickly the second card doesn't appear to flip at all
        setTimeout(() => {
            const newFlipped2 = [...flippedArray]
            newFlipped2[i1] = false
            newFlipped2[i2] = false
            setFlippedArray(newFlipped2)
            setButtonDisabled(false)
        }, 1000)

    }

    const flipCardUp=(i)=>{
        let currentFlip = flippedArray[i]
        const newFlipped = [...flippedArray]
        newFlipped[i] = currentFlip === true ? false : true
        setFlippedArray(newFlipped) //
        return newFlipped
    }

    const handleFlip=(i)=>{
        // if two cards are flipped, disable clicking - janky, I know
        if (buttonDisabled ===true){
            setTimeout(()=>{
                setButtonDisabled(false)
            },200)
        } else {
            // check to see if the card is already matched
            // if matched, then do nothing. No clicky clicky.
            // if not currently matched, then perform clicky clicky.

            if (matchedArray[i] ===false && flippedArray[i]===false) {
                setFlippedCount(flippedCount + 1)

                let newFlipped = flipCardUp(i)

                // if it's the first turn
                if (newFlipped.filter(x => x).length % 2 !== 0) {
                    f = curriedCheckMatch(i, cards[i].sys.id)
                } else if (newFlipped.filter(x => x).length % 2 === 0) {
                    setButtonDisabled(true)
                    f(i, cards[i].sys.id)
                }
            }
        }
    }

    return(
        <div className="board grid items-stretch justify-center gap-1 justify-items-center grid-cols-3 md:grid-cols-6">
            {cards.map((card, index)=> {
                return (
                    <li key={index}>
                        <Card
                            // id = card.id
                            card={card}
                            flippedStatus={flippedArray[index]}
                            onClick={()=>handleFlip(index)}
                            disabled={buttonDisabled}
                        />
                    </li>
                )
            })}
        </div>
    )
}
