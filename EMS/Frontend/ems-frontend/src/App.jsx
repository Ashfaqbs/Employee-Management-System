import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HelloWorld from './components/HelloWorld'
import ListEmployeeComponent from './components/ListEmployeeComponents'
import MyNavbar from './components/Navbar'

function App() {

  return (
    <>
    <MyNavbar/>
    <HelloWorld/>
    <ListEmployeeComponent/>
    </>
  )
}

export default App
