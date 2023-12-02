const component =(element)=>{
    console.log(element)
    const content=document.getElementById(`content`)    
    while(content.children[1]){
        content.removeChild(content.children[1])
    }
    content.appendChild(element)    
}
export default component