import router from "./router";
import services from "../components/services";
import cart from "../components/cart";
import orders from "../components/orders";
import about from "../components/about";
import home from "../components/home";
import { ddFn } from "../functions/navfns";

const compsfns={
    'services':services,'cart':cart,'orders':orders,'about':about,'home':home
}


const navigation=()=>{
    document.querySelectorAll('.linkbutton').forEach(lbtn=>{
        lbtn.addEventListener('click',(e)=>{
            document.querySelectorAll('.linkbutton').forEach(item=>{
                item.style.backgroundColor='#d1d1d1'
            
            })
            e.target.style.backgroundColor='#a1a1a1'
            e.preventDefault()
            if(document.querySelector('#ddbtn')){
                ddFn()
            };
            router({hrf:e.target.parentElement.href,comp:compsfns[e.target.parentElement.textContent.trim()],event:e})
        })
    })
};

export  {navigation,compsfns}