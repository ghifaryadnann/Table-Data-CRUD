import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import About from "./Component/About"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        

      </Routes>
      
      </BrowserRouter>
     

     
    </div>
  )
}

export default App