import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './components/ListEmployeeComponents'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBar from './components/CookieBar'
import {BrowserRouter} from 'react-router-dom'


function App() {
  

  return (
    <>
      
      <Navbar />
      <ListEmployeeComponent />
      <CookieBar/>
      <Footer />
    </>
  )
}

export default App
