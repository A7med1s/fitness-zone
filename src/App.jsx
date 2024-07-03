// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ArticlesPage from './pages/ArticlesPage';
import Nutrition from './pages/Nutrition';
import Products from './pages/Products';

function App() {
  
  return(
  <>
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/> }/>
        <Route  path='/articles' element={<ArticlesPage/> }/>
        <Route  path='/nutrition' element={<Nutrition/> }/>
        <Route  path='/products' element={<Products/> }/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  </>
  )

}




export default App;

