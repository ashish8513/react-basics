import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setColor] = useState(0)

  useEffect(() => {
    alert("count was changed")
    setColor(color + 1)
  }, [count])

  useEffect(() => {
    alert("Hey Welcome to my page.This is the first render of app.jsx")
    return
  }, [count])


  return (
    <>
      <Navbar color={"cyan" + "blue" + color} />
      <div>The count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update Count{count}</button>
    </>
  )
}

export default App
