export function SideMenuIcon(props) {
    const dark = props.dark
    return (
            <div className={"sideMenuIcon " + (dark ? 'yellow' : "blue50")}>
            </div>
    )
}