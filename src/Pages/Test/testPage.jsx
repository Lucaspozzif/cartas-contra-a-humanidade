import { onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CreateAccount } from "../../Components/CreateAccount/createAccount"
import { auth, provider } from "../../Data/Firebase/firebase"

export function TestPage() {
    const [login, setLogin] = useState(false)
    const [name, setName] = useState('yume wo')
    const navigate = useNavigate()

    onAuthStateChanged(auth, (user) => {
        if (user) setLogin(true)
    })
    return (
        <div>
            {
                login ?
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    CreateAccount(auth,name)
                }}>
                    <input
                    type={'text'}
                    onChange={(e) => {
                        setName(e.target.name)
                    }}
                    />
                </form>:
                    <button onClick={() => { signInWithPopup(auth, provider) }} >Sign In</button>
            }
        </div>
    )
}