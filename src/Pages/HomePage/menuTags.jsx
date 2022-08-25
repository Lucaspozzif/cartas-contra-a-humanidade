import {Link } from 'react-router-dom'

export function MenuItem(props) {
    return (
        <Link to={props.link}>
        <div className="menuButton">
            <h1 className='menuText'>{props.text}</h1>
            <div className='iconHolder'></div>
        </div>
        </Link>
    )

}
export function MenuSpacer(props) {
    console.log(props)
    return (

        <div className="menuSpacer backSpacer">
            <div className={
                (props.up == true ? 'topSpacer ' : ' ') +
                (props.down == true ? 'bottomSpacer ' : ' ') +
                'menuSpacer ' + 'frontSpacer '
            }>

            </div>
        </div>
    )
}