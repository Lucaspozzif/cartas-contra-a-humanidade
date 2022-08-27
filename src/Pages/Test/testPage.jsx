import { SideMenu } from "../../Components/SideMenu/sideMenu"
import { FirebasePage } from "../../Data/Firebase/firestore"

export function TestPage(){
    return(
        <div className="background yellow">
        <p>Essa página é um teste</p>
        <SideMenu dark={true} closed={false}/>

        </div>
    )
}