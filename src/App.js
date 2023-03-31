import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products';
import { ProductContextProvider } from './context/product-context';

function App() {
  return (
    <div className='App'>
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
