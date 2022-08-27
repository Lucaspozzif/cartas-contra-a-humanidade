import '../../Style/Card/card.css'
import '../../Style/Card/cardText.css'

export function Card(props) {
    const size = props.size
    const text = props.text
    const header = props.headerText
    const footer = props.footerText
    return(
            <div className={'card blue '+('card'+size)}>
                <p className={'cardHeaderText '+('cardSubtext'+size)}>{header}</p>
                <h1 className={'cardText '+('cardText'+size)}>{text}</h1>
                <p className={'cardFooterText ' +('cardSubtext'+size)}>{footer}</p>
            </div>
    )
    
}