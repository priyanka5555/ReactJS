import Demo from "./Demo"

function App() {
    const username = "Priyanka"  
  return (
    <>  
  
    <Demo />
    <p>Hello, my name is {username}</p>    
    {/* In JSX, we write variable in {} and it is known as expression/ evaluated expression. Means in {} we don't write entire JS but we write the final outcome that has been evaluated*/}
   {/* {if (true) username} - you cannot write this code this, all this evaluation code either you can write either outside of the function of inside the function but before return */}
   {/* Reason for not writing evaluating code - because whatever JSX I am returing, React will parse it and convert it into tree structure which is eventually in object format
   and in object we do not write logic(if...else, forloop, etc) that's why we cannot write {if (true) username}  */}

   {/* <> </>  - this is known as fragment, it allows to write more than one tag */}
    </>
    
  )
}

export default App
