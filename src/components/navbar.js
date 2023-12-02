// import elemcreater from "../modules/elemcreater";
import component from "../modules/component";
import elc2 from "../modules/elc2";
import ddimg from '../assets/images/list.svg'

const navbar = () => {
  component(elc2({ prop: ('div.navcontainer#navbar.dflex') }))
  elc2({ prop: `div.rightnav#rightnav`, parentId: 'navbar' })
  elc2({ prop: `div.leftnav#leftnav.dflex`, parentId: 'navbar' })
  // console.log(window.innerWidth)
  elc2({prop:'ul#rnavul.dflex',parentId:'rightnav'})
  //onload
  if(window.innerWidth <600 ) {
    !document.getElementById('ddbtn')&&(elc2({prop:`button#ddbtn style='width:40px'`,parentId:'rightnav',func:'()=>show/hidedd()'}))
    document.getElementById('rnavul').style.width='100px'
    document .getElementById('ddbtn').background=ddimg}

  //during testing  
  window.addEventListener('resize', ()=>{
    if(window.innerWidth <600 ) {
      // console.log(document.getElementById('rightnav').style)
      !document.getElementById('ddbtn')&&(elc2({prop:`button#ddbtn style='width:40px'`,parentId:'rightnav',func:'()=>show/hidedd()'}))
      document.getElementById('rnavul').style.width='100px'
      document .getElementById('ddbtn').background=ddimg
    }else{
      document.getElementById('rnavul').style.width='unset'
      document.getElementById('ddbtn')&&document.getElementById('ddbtn').remove()
    }
  });
  

  elc2({ parentId: 'rnavul', prop: 'li#rnavli1' })
  elc2({ parentId: 'rnavli1', prop: `a#rnavlink1 src='/'` })
  elc2({ parentId: 'rnavlink1', prop: `button#rlb1.linkbutton`, text: `home` })
  elc2({ parentId: 'rnavlink1', prop: `button#rlb2.linkbutton`, text: `services` })
  elc2({ parentId: 'rnavlink1', prop: `button#rlb3.linkbutton`, text: `about` })
  elc2({ parentId: 'rnavlink1', prop: `button#rlb4.linkbutton`, text: `orders` })
  elc2({ parentId: 'rnavlink1', prop: `button#rlb5.linkbutton`, text: `cart` })


}

export default navbar