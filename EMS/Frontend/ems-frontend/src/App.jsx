import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HelloWorld from './components/HelloWorld'
import ListEmployeeComponent from './components/ListEmployeeComponents'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <HelloWorld/>
    <ListEmployeeComponent/>
    </>
  )
}

export default App
