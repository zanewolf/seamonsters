import React, {useEffect} from "react";
import {Button} from 'react-bootstrap'
import Gameboard from "../components/Gameboard";
import {fetchMedia} from "./api/ContentfulAPI";

export async function getStaticProps() {
    let content = fetchMedia()
        .then((projectsFetched) => projectsFetched)
        .catch((error) => console.log(error))

    return content
}



export default function Game({content}){


    const [diffLevel, setDiffLevel] = React.useState(null)
    const [gameState,setGameState] = React.useState(false) //this gets drilled down to Board TODO switch to context? :/


    return (
        <div className={"gameboard flex flex-col w-full min-h-[75vh] justify-center"}>

            <div className={'flex flex-row flex-nowrap justify-center m-auto'}>
                {diffLevel ? (
                    // <div className={''}>hi</div>
                    <Gameboard
                        cards={content}
                        diffLevel={diffLevel}
                        gameState={gameState}
                        setGameState={setGameState}

                    />
                ) : (
                    <h2 >Choose a difficulty to begin!</h2>
                )}
            </div>
            {/*<div className="">*/}
                <div className={"flex flex-row flex-nowrap justify-center m-auto gap-3"}>
                    {diffLevel === null ? (
                        <>
                            <Button variant="success" className={""} onClick={() => setDiffLevel(12)}>Easy</Button>
                            <Button variant="warning" className={"text-white"} onClick={() => setDiffLevel(18)}>Medium</Button>
                            <Button variant="danger" className={""} onClick={() => setDiffLevel(24)}>Hard</Button>
                        </>
                    ) : (
                        <div>
                            <button variant = "light" className={"border-2 border-white p-2 mt-2 rounded-xl"}
                                    onClick={() =>
                                        setTimeout(() => {
                                            setDiffLevel(null)
                                            setGameState(false)
                                        }, 250)}
                            >
                                {gameState===false? `Start Over` : `Play Again?`}
                            </button>

                        </div>
                    )}
                </div>
            {/*</div>*/}

        </div>
    )
}