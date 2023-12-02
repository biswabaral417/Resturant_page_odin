//all spa routing are handled here
import component from "./component"

const router=({event,hrf,comp})=>{
    
   event&& event.preventDefault()
    history.replaceState(null,null,hrf)
    component(comp);
}

export default router