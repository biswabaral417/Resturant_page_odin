// const { match } = require("assert")

const elc2=(prop,parentId)=>{
    // console.log((prop.match(/\.\w+/g)[0]).substring(1))
    const element = document.createElement(prop.trim().match(/^\s*(\w+)?/)[0])
    prop.match(/\.\w+/g).forEach(item => {
        console.log(item.substring(1))
        element.classList.add(item.substring(1))        
    });
    element.id=(prop.match(/\#\w+/g)[0].substring(1))
    element.style=(prop.match(/style=\s*'([^']*)'/)[1])
    parentId && document.getElementById(parentId).appendChild(element)
    return element
}
console.log(elc2(`div.cls#gug style='color:red;'`))