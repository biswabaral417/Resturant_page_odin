// const { match } = require("assert")

const elc2 = ({prop, parentId,text,func}) => {
    console.log((prop.match(/^\s*(\w+)?/)[0]))
    const element = document.createElement(prop.trim().match(/^\s*(\w+)?/)[0])

    prop.match(/\.\w+/g)&&(prop.match(/\.\w+/g).forEach(item => {
        console.log(item.substring(1))
        element.classList.add(item.substring(1))
    }));

    element.id = (prop.match(/\#\w+/g)[0].substring(1))
    console.log(prop.match(/style=\s*'([^']*)'/))
    prop.match(/style=\s*'([^']*)'/) &&(element.style = (prop.match(/style=\s*'([^']*)'/)[1]))

    prop.match(/src=\s*'([^']*)'/)&& console.log(prop.match(/src=\s*'([^']*)'/)[1])
    prop.match(/src=\s*'([^']*)'/) && (element.setAttribute('src',prop.match(/src=\s*'([^']*)'/)[1]))

    console.log( prop.match(/href=\s*'([^']*)'/) )
    prop.match(/href=\s*'([^']*)'/) && (element.setAttribute('href',prop.match(/href=\s*'([^']*)'/)[1]))

    parentId&& document.getElementById(parentId).appendChild(element)

    func&&element.setAttribute(`onclick`,func)
    text&&(element.textContent=text)
    // console.log(elc2(`div.cls#gug style='color:red;'`))
    console.log(element)
    // return element
}
export default elc2