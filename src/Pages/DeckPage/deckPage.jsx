import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../Components/Card/card";
import { Deck } from "../../Components/Deck/deck";
import { SideMenu } from "../../Components/SideMenu/sideMenu";
import { FirestoreCollection } from "../../Data/Firebase/firestore";

import '../../Style/DeckPage/mainCard.css'
import '../../Style/DeckPage/viewCard.css'

export function DeckPage() {
    const [questCard, questCardState] = useState(0);
    const [awnserCard, awnserCardState] = useState(0);

    const deckId = useParams()['deckId']
    const decks = FirestoreCollection('decks')
    const players = FirestoreCollection('players')
    if (!decks || !players) return

    const deck = decks.find(item => item.id == deckId)
    const deckData = deck['data']

    const player = players.find(item => item.id == deckData['author'])
    const ranking = decks.sort(deck => deck['data']['used'].length).indexOf(deck) + 1

    const author = player['name']
    const dateValue = new Date(deckData['createdAt']['seconds'] * 1000)
    const createdAt = dateValue.getDate() + '/' + (dateValue.getMonth() + 1) + '/' + dateValue.getFullYear()
    const favorite = deckData['favorite']
    const usedThisMonth = []

    var oneMonth = new Date()
    oneMonth.setMonth(oneMonth.getMonth() - 1)
    oneMonth = oneMonth.getTime()
    const timesUsed = deckData['used'].map(i => {
        if (i['seconds'] * 1000 > oneMonth) {
            usedThisMonth.push(i['seconds'] * 1000)
        }
    })


    return (
        <div className="background black">
            <SideMenu dark={false} closed={true} />
            <div className="viewCardSupport">
                <div className="viewCard">
                    <div className="arrowButton" onClick={() => {
                        if (awnserCard == 0) awnserCardState(deck['awnser'].length - 1)
                        else awnserCardState(awnserCard - 1)
                    }}></div>
                    <Card size={3} text={deck['awnser'][awnserCard]['text']} />
                    <div className="arrowButton" onClick={() => {
                        if (awnserCard == deck['awnser'].length - 1) awnserCardState(0)
                        else awnserCardState(awnserCard + 1)
                    }}></div>
                </div>
                <p>teste</p>
                <div className="viewCard">
                    <div className="arrowButton" onClick={() => {
                        if (questCard == 0) questCardState(deck['quest'].length - 1)
                        else questCardState(questCard - 1)
                    }}></div>
                    <Card size={3} text={deck['quest'][questCard]['text'].join('\n____\n')} />
                    <div className="arrowButton" onClick={() => {
                        if (questCard == deck['quest'].length - 1) questCardState(0)
                        else questCardState(questCard + 1)
                    }}></div>
                </div>
                <p>teste</p>
            </div>
            <div className="mainCard">
                <Card size={2} text={deckData['name']} footerText={author} headerText={deckData['name']} />
            </div>
            <Deck
                closed={false}
                dark={true}
                text={
                    'Autor: ' + author +
                    '|Criado em: ' + createdAt +
                    '|' + favorite + ' pessoas curtiram esse baralho|'
                    + usedThisMonth.length + ' partidas usaram esse baralho este mês|#' +
                    ranking + 'º no ranking de mais jogados'
                }
            />

        </div>
    )

}