import '../../Style/Reset/reset.css'
import '../../Style/HomePage/homePage.css'
import '../../Style/HomePage/cards.css'
import '../../Style/HomePage/deck.css'

import { useState } from 'react'
import { DeckHolder } from './deckHolder'
import { SideMenu } from '../../Components/SideMenu/sideMenu'

export function HomePage() {

    return (
        <div className="background yellow">
            <SideMenu dark={true} closed={false}/>
            <DeckHolder name={'teste'} />

        </div>
    )
}