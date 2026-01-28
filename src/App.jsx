import { Movieprovider }  from './context/MovieContext';
import './css/App.css';
import Home from  './pages/Home';
import Favorites from "./pages/Favorites"
import {Routes,Route} from "react-router-dom"
import NavBar  from './components/NavBar';
function App() {


  

  return (
    <Movieprovider>
      <NavBar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>

      </Routes>
    </main>
    </Movieprovider>
  )
}



export default App;
