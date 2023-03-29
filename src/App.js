import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
