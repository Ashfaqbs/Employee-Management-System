import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './components/ListEmployeeComponents'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieBar from './components/CookieBar'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import AddEmployee from './components/AddEmployee'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar />
<Routes>


{/* //base url http://localhost:3000/ */}
<Route path='/' element={<ListEmployeeComponent />} ></Route>
{/* http://localhost:3000/employees  */}
<Route path='/employees' element={<ListEmployeeComponent />} ></Route>
{/* http://localhost:3000/AddEmployee  */}
<Route path='/AddEmployee' element={<AddEmployee />} ></Route>
</Routes>
      


      
      {/* <CookieBar/> */}
      <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
