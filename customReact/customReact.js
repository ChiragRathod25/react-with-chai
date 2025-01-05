function customReact(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
    
}
const reactElement={
    type:'a',
    props:{
        target:'_blank',
        href:'https://www.google.com'
    },
    children:'Click here to visit google'
}


const root=document.querySelector("#root")
customReact(reactElement,root);