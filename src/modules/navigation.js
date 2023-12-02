import router from "./router";
import services from "../components/services";
import cart from "../components/cart";
import orders from "../components/orders";
import about from "../components/about";
import home from "../components/home";
import component from "./component";

const compsfns={
    'services':services,'cart':cart,'orders':orders,'about':about,'home':home
}

window.onload=()=>{
    
    if(window.location.pathname=='/')
    {
     component(home())
    }
    else{
        router({hrf:window.location.pathname,comp:compsfns[window.location.pathname.substring(1)]()})
    }
}

const navigation=()=>{
    document.querySelectorAll('.linkbutton').forEach(lbtn=>{
        lbtn.addEventListener('click',(e)=>{
            e.preventDefault()
            router({hrf:e.target.parentElement.href,comp:compsfns[e.target.parentElement.textContent.trim()](),event:e})
        })
    })
};

export default navigation