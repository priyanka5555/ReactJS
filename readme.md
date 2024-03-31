function myApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

Bundler converts the syntax like following. Because you write code as shown above but react does not understand it, that is why it is called jsx. In reality above should have code written like shown below then only you can create tree like structure, that's why when we write code as above, it then parse it into tree structure and make it just like below code.

const reactElement = {
    type: 'a',  //1st element would be type which represents the type of element, it could be any element like div, a, p, etc
    props: {   //2nd element props - represents what are the properties, you can add n number of properties. It is an object that is in pair of  key and value.  
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google'
 }