import { useState } from 'react'
import '../../Style/Card/card.css'
import '../../Style/Card/cardText.css'
import '../../Style/Card/cardInput.css'

export function Card(props) {
    const [inputText,inputTextState] = useState('')
    

    const size = props.size
    const text = props.text
    const header = props.headerText
    const footer = props.footerText
    const input = props.input
    return(
            <div className={'card blue '+('card'+size)}>
                <p className={'cardHeaderText '+('cardSubtext'+size)}>{header}</p>
                {input?
                <input 
                className={'cardInput blue '+('card'+size)+(' cardText'+size)} 
                onChange={(e)=>{
                    inputTextState(e.target.value)
                    localStorage.setItem(input,e.target.value)
                }}
                maxLength={100}
                ></input>:
                <></>
                }
                
                <h1 className={'cardText '+('cardText'+size)}>{input?inputText:text}</h1>
                <p className={'cardFooterText ' +('cardSubtext'+size)}>{footer}</p>
            </div>
    )
    
}