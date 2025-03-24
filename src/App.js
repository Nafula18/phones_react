
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AddProducts from './Components/AddProducts';
import GetProducts from './Components/GetProducts';
function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <h1>Welcome To The Modern World</h1>
        <h2>Smartphone Collection - Buy and Sell Online</h2>
      </header>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/addproducts' element={<AddProducts/>}/>
          <Route path='/getproducts' element={<GetProducts/>}/>
          

        </Routes>
    </div>
    </Router>
  );
}

export default App;
