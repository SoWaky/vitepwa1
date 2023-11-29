import Navbar from './components/Navbar'
import './styles/main.scss'
import Profile from './pages/profile'
import Map from './pages/map'
import Home from './pages/home'

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/profile":
      component = <Profile />
      break;
    case "/map":
      component = <Map />
      break;
    default:
      break;
  }


  return (
    <>
      <Navbar></Navbar>
      {component}
    </>
  )
}

export default App
