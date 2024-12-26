import { useState,useEffect } from 'react'


function App() {
  const [color, setColor] = useState("blue")
  const click = color => {
    setColor(color)
  }
useEffect(()=>{
document.body.style.backgroundColor = color
}, [color])
  return (
    <>
      <div className='App'>
        <button onClick = {
          () => {click("yellow")}
        }>change color</button>
      <div>CHANGE BACKGROUND COLOR</div>
      </div>
   
    </>
  )
}

export default App
