import { Link } from 'react-router-dom';
import { SideMenuIcon } from './sideMenuIcon';

export function SideMenuItem(props) {
    const dark = props.dark
    const closed = props.closed
    return (
        <Link to={props.link}>
            <div className={'sideMenuItem ' + (dark?'black ':' ')+(closed?'closed ':'open ')}>
                {closed?<></>:<h1 className='sideMenuText'>{props.text}</h1>}
                <SideMenuIcon dark={dark}/>
            </div>
        </Link>
    )
}