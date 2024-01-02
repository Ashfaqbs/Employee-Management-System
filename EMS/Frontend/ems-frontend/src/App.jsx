import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './components/ListEmployeeComponents'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBar from './components/CookieBar'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
<Routes>

<ListEmployeeComponent />

</Routes>
      


      
      <CookieBar/>
      <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
