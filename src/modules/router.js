//all spa routing are handled here
import component from "./component"
import { compsfns } from "./navigation"

const router=({event,hrf,comp})=>{
    
    console.log(window.location.pathname.substring(21))
    // console.log(event.target.parentElement.href)
    // console.log(comp.name)
    event&& event.preventDefault()
    history.replaceState(null,null,`/Resturant_page_odin/${comp.name}`)
    component(comp);
}

export default router