 function customRender(reactElement, container)// you can name anything in paramenter it doesn't necessary to keep it reactElement and container because it is just parament or placeholder right now
 { // so here we take two parameters react element and 2nd container where we will inject the element.

    //How to inject? so, take DOM element, so DOM element needs to be created so we for that we will use createElement and then will inject using append child.
    //let's create DOM element
   // const domElement = document.createElement('a') // we could have created element like this but we will create it like shown in below line because we want to create modular function
    
   
//    const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)  //Here we inject the element in mainContainer
//The above create domElement is not efficient because what if we create div, and it has only one attribute and we created two so in that case, it will throw error. So another way of writing it would be:

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue; 
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

 }


 //-------------------------------------------------------------------------------------------------------------------------------------------------
 //Behind the scene how react see the code after compile.
 //Example: you want to return a tag so we will return it the same way where we return an element and we will see how react see that return element. 
 //so react tries to create a tree of your element

 const reactElement = {
    type: 'a',  //1st element would be type which represents the type of element, it could be any element like div, a, p, etc
    props: {   //2nd element props - represents what are the properties, you can add n number of properties. It is an object that is in pair of  key and value.  
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google'
 } //Here we created the element because this is basically react's job. At the the end of the day we get this from react but right now we are creating this 
 //because we are not using react, we are writing it customize 
  //so what we are doing here, we are saying that if anybody wants to use our library, then he/she has to use it like this, has to write every element just like above mentioned 


 const mainContainer = document.querySelector('#root')

 //Now we want - to have such method or element that render the above created reactElement. Means to add it in the root.So, this is what we normally do in DOM. 
 //Trying to inject/add some element in div or root.

 customRender(reactElement, mainContainer) //Expects two things from you : 1) what should I inject/add : so obviously,it would be react element , 
 //2) Where should I inject : So inject it in mainContainer

 //Right now we don't know how does customRender works. So, for that you can design the method by yourself. Check out above function customRender(reactElement, container) 
