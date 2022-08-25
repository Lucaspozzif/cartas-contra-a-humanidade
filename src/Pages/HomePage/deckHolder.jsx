import { useState } from "react"

export function DeckHolder(props) {
    const [dhClass, dhClassState] = useState(false)
    return (
        <div
        
            className={'deckHolder dark ' + (dhClass == false ? 'closed' : 'opened')}
            onClick={() => {
                dhClassState(!dhClass)
            }}
        >
            

        </div>
    )
}