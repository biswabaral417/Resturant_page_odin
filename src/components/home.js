// import component from "../modules/component"
import elc2 from "../modules/elc2"
const home=()=>{
    elc2({prop:`div.component#homecomp style:'padding-top:40px'`,parentId:'content'})
    elc2({
        prop:`div.homebanner#titlediv`,parentId:`homecomp`
    })
    elc2({
        prop:`h1.homebanner#title`,parentId:`titlediv`,text:'the super resturant'
    })
    elc2({
        prop:`p#paragraph style='padding:50px'`,parentId:"titlediv" ,text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, quis et? Soluta cumque illo provident odio nam repellendus autem reprehenderit, quibusdam animi voluptate nihil pariatur corrupti magni rem ullam ducimus, aliquam beatae alias optio, sequi officia? Magni repellendus reiciendis beatae inventore omnis laborum. Aliquam blanditiis ducimus numquam odio saepe, facilis minus officia tempore voluptate, ipsum nesciunt laboriosam expedita mollitia perferendis reprehenderit eaque veniam. Laborum vitae, ipsum et amet dolorem quam ducimus dignissimos ad ullam nostrum blanditiis animi? Ex, ipsum a voluptatum autem odio id mollitia iusto ipsa! Iste, tenetur facere eaque, iusto earum dolorum accusantium laborum libero incidunt magnam repellendus quos ipsum  ve debitis sequi repellendus, repellat doloribus reiciendis porro! Doloremque voluptatem odio animi expedita ducimus repellendus fugit nihil? Sequi, rem non fugit facilis tempore iste temporibus nihil commodi optio odioue vero veniam dolorum minima molestias maiores possimus soluta at commodi cumque et tempora, illum hic pariatur est laboriosam eaque sed. Odio accusamus non, ipsum cumque nihil error magni iste incidunt culpa, inventore unde aliquid blanditiis pariatur autem ex debitis, ea repellat consequuntur ipsa numquam et dicta repellendus id odit. Neque libero dolores recusandae temporibus officiis eos, nihil enim repellat incidunt cum natus quaerat cumque error reiciendis, ullam porro consequuntur rem voluptate sapiente at hic eligendi optio. Quis totam blanditiis dignissimos ad quo asperiores numquam exercitationem magnam possimus vitae nobis vel eum a placeat laborum quas, necessitatibus perferendis itaque. Sequi atque voluptate eum incidunt deleniti iure!'
    })
    
}
export default home