import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Card } from "../../Components/Card/card";
import { SideMenu } from "../../Components/SideMenu/sideMenu";
import { auth, provider } from "../../Data/Firebase/firebase";
import { FirestoreCollection } from "../../Data/Firebase/firestore";

export function CreateDeck() {
    
    const decks = FirestoreCollection('decks')
    const players = FirestoreCollection('players')

    const navigate = useNavigate();
    if (!decks || !players) return

    if(!auth.currentUser){
        console.log('nao logado')
        navigate('/')
    }
    const creatingDeck = {
        awnser:[],
        quest:[],
        data:[
        ]

    }

    return (
        <div className="dark">
            <SideMenu dark={false} closed={true} />
            <Card size={3} input={'carta1'} />
            <div className="viewCardSupport">
                <div className="viewCard">
                    <Card size={3} input={'questCard'} />
                </div>
                <p>teste</p>
                <div className="viewCard">
                    <Card size={3} input={'awnserCard'} />
                </div>
                <p>teste</p>
            </div>
            <div className="mainCard">
                <Card size={2} text={'Testte'} footerText={''} headerText={''} />
            </div>

        </div>
    )
}