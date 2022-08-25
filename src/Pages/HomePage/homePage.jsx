import '../../Style/Reset/reset.css'
import '../../Style/HomePage/homePage.css'
import '../../Style/HomePage/menu.css'
import '../../Style/HomePage/cards.css'
import '../../Style/HomePage/deck.css'
import { useState } from 'react'
import { Menu } from './menu'
import { DeckHolder } from './deckHolder'

export function HomePage() {

    return (
        <div className="background yellow">
            <Menu />
            <DeckHolder name={'teste'}/>

        </div>
    )
}