const component =(comp)=>{
    console.log(comp)
    const content=document.getElementById(`content`)    
    while(content.children[1]){
        content.removeChild(content.children[1])
    }
    comp()
}
export default component