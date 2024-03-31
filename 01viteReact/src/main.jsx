import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
         <h2>This is custom App!!!</h2>
         <p>Hurray! It worked!</p>
    </div>
   
  )
}

// const reactElement = {
//   type: 'a',  //1st element would be type which represents the type of element, it could be any element like div, a, p, etc
//   props: {   //2nd element props - represents what are the properties, you can add n number of properties. It is an object that is in pair of  key and value.  
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google'
// }   //This reactElement did not work because this is custom tree/ rules set by us and we are trying to render it on React render. In customReact project it worked because there
//custom tree and custom render both were created by us. Here if we are using React render method then we have to create element according to the rules set by React.

const User1 = "Priyanka Dave"
const reactElement = React.createElement(  // This element created by react is injected by babble - bundler
  'a',
  {href: "https://google.com",
    target: "_blank"},  //if you don't have attributes then keep it empty but it is neccessary to write it.
  "Goto Google",
  User1   //variable
)   //This reactElement worked because here we used the tree structure created by React because the render method we are using is also created by React.

ReactDOM.createRoot(document.getElementById('root')).render(

   // <MyApp />   //This is JSK syntax/Element. Every react use bundler like bable and vite itself uses a bundler. What bundler does some magic behind the scene and it  improves the syntax or upgrade the syntax.
  reactElement
)
