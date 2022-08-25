import { MenuItem, MenuSpacer } from "./menuTags";

export function Menu() {
    return (
        <div className="menu">
            <div className="menuHolder darkMh"></div>
            <div className="menuButtons">
                <MenuSpacer up={false} down={true} />
                <MenuItem link={'/e'} text={'Entrar em uma Sala'} />
                <MenuSpacer up={true} down={true} />
                <MenuItem link={'/c'} text={'Criar Sala'} />
                <MenuSpacer up={true} down={true} />
                <MenuItem link={'/d/explore/0'} text={'Explorar Baralhos'} />
                <MenuSpacer up={true} down={true} />
                <MenuItem link={'/d/my/0'} text={'Ver meus Baralhos'} />
                <MenuSpacer up={true} down={false} />
            </div>
        </div>
    )
}