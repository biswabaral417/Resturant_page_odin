// import elemcreater from "../modules/elemcreater";
import component from "../modules/component";
import elc2 from "../modules/elc2";
import ddimg from '../assets/images/list.svg'
import { ddFn } from "../functions/navfns";

const navbar = () => {
  elc2({ prop: ('div.navcontainer#navbar.dflex'), parentId:'content'})
  elc2({ prop: `div.rightnav#rightnav`, parentId: 'navbar' })//creating a div for right side nav
  elc2({ prop: `div.leftnav#leftnav.dflex`, parentId: 'navbar' })//creating nav for left side
  elc2({ prop: 'ul#rnavul.dflex', parentId: 'rightnav' })//creating right  nav element list ul

  //onload check witdth for dropdowns
  if (window.innerWidth < 600) {
    if (!document.getElementById('ddbtn')) {
      elc2({ prop: `button#ddbtn`, parentId: 'rightnav' })
      document.getElementById('rnavul').style.position = 'fixed'
      document.getElementById('rnavul').style.left = '50px'
      document.getElementById('rnavul').style.width = '100px'
      document.querySelector('#rnavul').style.display = 'none';
      document.getElementById('ddbtn').style.backgroundImage = `url(${ddimg})`
      document.getElementById('ddbtn').addEventListener('click', () => {
        ddFn()
      })
      window.onscroll=()=>{
        if(document.querySelector('#rnavul').style.display != 'none'){
          ddFn();
        }
      }
    }
  }

  //during testing  the responsiveness and default wide displays navbar ui
  window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
      // //console.log(document.getElementById('rightnav').style)
      if (!document.getElementById('ddbtn')) {
        elc2({ prop: `button#ddbtn`, parentId: 'rightnav' })
        document.getElementById('rnavul').style.position = 'fixed'
        document.getElementById('rnavul').style.left = '50px'

        document.getElementById('rnavul').style.width = '100px'
        document.getElementById('ddbtn').style.background = `url(${ddimg})`
        document.querySelector('#rnavul').style.display = 'none';
        document.getElementById('ddbtn').addEventListener('click', () => {
          ddFn()
          window.onscroll=()=>{
            if(document.querySelector('#rnavul').style.display != 'none'){
              ddFn();
            }
          }
        })
      }

    } else {
      document.querySelector('#rnavul').style.display = 'flex';
      document.getElementById('rnavul').style.width = 'unset'
      document.getElementById('ddbtn') && document.getElementById('ddbtn').remove()
      document.getElementById('rnavul').style.left = ''

    }
  });


  //creating home button
  elc2({ parentId: 'rnavul', prop: 'li#rnavli1.navli' })
  elc2({ parentId: 'rnavli1', prop: `a#rnavlink1 href='/'` })
  elc2({ parentId: 'rnavlink1', prop: `button#rlb1.linkbutton`, text: `home` })
  //creating services btn
  elc2({ parentId: 'rnavul', prop: 'li#rnavli2.navli' })
  elc2({ parentId: 'rnavli2', prop: `a#rnavlink2 href='/services'` })
  elc2({ parentId: 'rnavlink2', prop: `button#rlb2.linkbutton`, text: `services` })
  //creating about page btn
  elc2({ parentId: 'rnavul', prop: 'li#rnavli3.navli' })
  elc2({ parentId: 'rnavli3', prop: `a#rnavlink3 href='/about'` })
  elc2({ parentId: 'rnavlink3', prop: `button#rlb3.linkbutton`, text: `about` })
  //creating orders page btn  
  elc2({ parentId: 'rnavul', prop: 'li#rnavli4.navli' })
  elc2({ parentId: 'rnavli4', prop: `a#rnavlink4 href='/orders'` })
  elc2({ parentId: 'rnavlink4', prop: `button#rlb4.linkbutton`, text: `orders` })
  //creating cart btn
  elc2({ parentId: 'rnavul', prop: 'li#rnavli5.navli' })
  elc2({ parentId: 'rnavli5', prop: `a#rnavlink5 href='/cart'` })
  elc2({ parentId: 'rnavlink5', prop: `button#rlb5.linkbutton`, text: `cart` })
}

export default navbar