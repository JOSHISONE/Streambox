import NavBar from "../component/NavBar.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Movies from "../pages/Movies.jsx"
import Series from "../pages/Series.jsx"
import Music from "../pages/Music.jsx"
import Sports from "../pages/Sports.jsx"
import Gaming from "../pages/Gaming.jsx"
import Home from "../pages/Home.jsx"

function App(){
    
  return(
     <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/Series" element= {<Series/>}/>
      <Route path="/Movies" element= {<Movies/>}/>
      <Route path="/Music" element= {<Music/>}/>
      <Route path="/Sports" element= {<Sports/>}/>
      <Route path="/Gaming" element= {<Gaming/>}/>
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App


/*import Logo from "../component/Logo.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function AboutUs(){
   return <h1>About Us</h1>
}

function Portfolio(){
   return <h1>Portfolio</h1>
}

function Services(){
   return <h1>Services</h1>
}
function ContactUs(){
   return <h1>Contact Us</h1>
}

function App(){
  return(
  <>
     <BrowserRouter>
     <Logo/>
     <Routes>
      <Route path="/AboutUs" element= {<AboutUs/>}/>
      <Route path="/Portfolio" element= {<Portfolio/>}/>
      <Route path="/Services" element= {<Services/>}/>
      <Route path="/ContactUs" element= {<ContactUs/>}/>
     </Routes>
     </BrowserRouter>
     </>

  )
}

export default App
*/