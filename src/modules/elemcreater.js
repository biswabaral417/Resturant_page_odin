const elemcreater = ({ elName, elId, styletext, classes,parentId}) => {
    const element = document.createElement(`${elName}`)
    // //console.log(classes)
    classes.forEach(item => {
        (element.className += `${item} `)
    });
    elId && (element.id = elId)
    styletext && (element.style = styletext);
    parentId && document.getElementById(parentId).appendChild(element)
    return element;
}
export default elemcreater