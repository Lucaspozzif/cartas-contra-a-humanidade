import { SideMenuIcon } from "./sideMenuIcon";
import { SideMenuSpacer } from "./sideMenuSpacer";
import { SideMenuItem} from "./sideMenuItem";


import '../../Style/SideMenu/sideMenu.css'
import '../../Style/SideMenu/sideMenuItem.css'
import '../../Style/SideMenu/sideMenuIcon.css'
import '../../Style/SideMenu/sideMenuSpacer.css'
import '../../Style/SideMenu/sideMenuText.css'
import '../../Style/SideMenu/colors.css'

export function SideMenu(props) {
    const dark = props.dark
    const closed = props.closed
    return(
        <div className={"sideMenu "+(dark?"black":"blue10")}>
            <SideMenuItem link={'/e'} closed={closed} dark={dark} text={"Entrar em uma Sala"}/>
            <SideMenuSpacer />
            <SideMenuItem link={'/e'} closed={closed} dark={dark} text={"Criar Sala"}/>
            <SideMenuSpacer />
            <SideMenuItem link={'/e'} closed={closed} dark={dark} text={"Explorar Baralhos"}/>
            <SideMenuSpacer />
            <SideMenuItem link={'/e'} closed={closed} dark={dark} text={"Ver meus Baralhos"}/>
        </div>  

    )  
}