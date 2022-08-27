import { useNavigate } from 'react-router-dom'
import { useState } from "react"

export function EnterRoom() {
    var navigate = useNavigate()
    const [inputValue, inputChange] = useState()
    const [button, buttonState] = useState(false)

    return (
        <div>
            <input
                onChange={(e) => {
                    const value = e.target.value
                    inputChange(value)
                    if (value.length == 5) {
                        buttonState(true)
                    }
                }}
                maxLength={5}
                type={'text'}
            >
            </input>
            <p>{inputValue}</p>
            {button ?
                <p onClick={() => {
                    navigate('/r/wait/' + inputValue)
                }
                }>procurar sala</p> :
                <p></p>
            }

        </div>
    )
}