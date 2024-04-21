import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor , setBgColor] = useState("white")

  const red = () =>{
     setBgColor("red")
  }
  const green = () =>{
     setBgColor("green")
  }
  const blue = () =>{
     setBgColor("blue")
  }
  const yellow = () =>{
     setBgColor("yellow")
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: bgColor}}>
          <div className="border border-black flex flex-wrap rounded-lg justify-center p-3 gap-3  fixed bottom-12 align-middle m-4 inset-x-0 bg-slate-300">
            <button className=' bg-red-600 w-32 rounded-md mr-4 p-2 border-black border' onClick={red}>Red</button>
            <button className=' bg-blue-600 w-32 rounded-md mr-4 p-2 border-black border' onClick={blue}>Blue</button>
            <button className=' bg-green-600 w-32 rounded-md mr-4 p-2 border-black border ' onClick={green}>Green</button>
            <button className=' bg-yellow-600 w-32 rounded-md mr-4 p-2 border-black border' onClick={yellow}>Yellow</button>
          </div>
    </div>
  
  )
}

export default App
