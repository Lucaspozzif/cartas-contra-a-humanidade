import { useParams } from "react-router-dom";
import { FirestoreCollection } from "../../Data/Firebase/firestore";

export function DeckPage() {
    const deckId = useParams()['deckId']
    const decks = FirestoreCollection('decks')
    if (!decks) return
    const deck = decks.find(item => item.id == deckId)
    const deckData = deck['data']
    return (
        <div>
        <p>{deckData['author']}</p>
        <p>{deckData['name']}</p>

        </div>
    )

}