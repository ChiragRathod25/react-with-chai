import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*
function MyApp(){
  return (
    <>
    Hii
    </>
  )
}
  */

/*
const reactElement={
  type:'a',
  props:{
      target:'_blank',
      href:'https://www.google.com'
  },
  children:'Click here to visit google'
}
const anotherElement=React.createElement(reactElement.type,reactElement.props,reactElement.children)
  */


/*
const name="Chirag"
const printTitle={
  type:'H1',
  props:{
    color:'red'
  },
  children:`I'am playing with javascript and react !! \n My name is ${name}`,
}
const secondElement=React.createElement(printTitle.type,printTitle.props,printTitle.children,printTitle.name)
  */


/*
function getBookName(){
  const Book="Think and grow rich"
  return(
    <>Currently i'm reading {Book}</> 
    //here we have to pass evalurated JavaScript inside {}, we can't pass an expression or any codes, because we know that it will be coonverted to object, so how we are able to definde function, condition, expression, etc inside object, so it will not follow javascript syntax,  
  )
}
  */

createRoot(document.getElementById('root')).render(
  // <StrictMode>

  // <App/>  //is a function, so we can execute like this, not a good practice
  App()
    // MyApp()
   /* function gteName(name){
  
      return (
        <>
        Bye {name}
        </>
      )
    }("chirag")*/
    // <MyApp/>

    //comment: inside react our html is converted to object, as we discussed in /customeReact/customReact.js, so insted of passing a HTML, we can pass element as we discussed 

    //reactElement  //1.it will not work because of function declaration of it inside React
    //anotherElement  // 2.this will work becase we are passing an element created using defined React function
    
    //comment: if another vaiaable is there that it is passed to craeteElement function parameter at the end while creation of it
    // secondElement // it will print with my name


    //
    // getBookName()


  // </StrictMode>,
)
