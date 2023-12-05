import elc2 from "../modules/elc2"
import data from '../assets/data.json'
// import img from '../assets/images/foodimages'

//weird chat gpt code that works


const services = () => {
    //console.log('skbgakhrbo')
    elc2({ prop: ('div.services#services.component'), parentId: 'content' })

    data.forEach(async (element, i) => {
        elc2({
            prop: `div#food${i}.foodDiv`, parentId: 'services'
        })
        elc2({
            prop:`img#itemimg${i}.itemimg src='${element.itemImgLoc}'`,parentId:`food${i}`
        })
        document.getElementById(`itemimg${i}`).alt="not fount"
        elc2({
            prop: `p#itemname${i}.foodname`, parentId: `food${i}`, text: element.itemName
        })
        elc2({
            prop: `p#itemprice${i}.foodprice`, parentId: `food${i}`, text: element.itemPrice
        })
    });

}
export default services