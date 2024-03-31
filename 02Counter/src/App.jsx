import { useState } from 'react'      //from this library we can use hook. Hooks are methods/functiom so we will write it inside {}
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
   // counter = counter + 1;
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

// रिएक्ट रिएक्ट करती है वैरियेबल्स के अपडेशन पर इसीलिए तो उसका नाम रिएक्ट रखा की बड़ी रिएक्टिव लाइब्रेरी है एक वेरिएबल अपडेट होते हर जगह रिएक्ट करती है तो यही में कहानी है

//React controls UI updation
