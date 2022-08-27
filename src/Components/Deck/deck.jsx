import { Card } from "../Card/card";

import '../../Style/Deck/deck.css'
import '../../Style/Deck/deckButton.css'
import '../../Style/Style/colors.css'

export function Deck(props) {
    const closed = props.closed
    const dark = props.dark
    const color = props.color
    const text = props.text.split('|')
    return (
        <div className={(closed?'deckButton ':'deck ')+(dark?'blue10':'black ')}>
            <Card color={color} text={text[0]} size={1}/>
            <Card color={color} text={text[1]} size={1}/>
            <Card color={color} text={text[2]} size={1}/>
            <Card color={color} text={text[3]} size={1}/>
            <Card color={color} text={text[4]} size={1}/>

            <div className={(closed ? 'hideDeckButton ' : 'deckButton ')+(dark ? 'blue30 ' : 'blue ')}></div>
        </div>
    )

}