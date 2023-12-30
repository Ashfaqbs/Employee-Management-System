import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HelloWorld from './components/HelloWorld'
import ListEmployeeComponent from './components/ListEmployeeComponents'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavbarComponent from './components/NavbarComponent'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <NavbarComponent/>
    <HelloWorld/>
    <ListEmployeeComponent/>
    <Footer/>
    </>
  )
}

export default App
