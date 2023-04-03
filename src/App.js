import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products';
import { ProductContextProvider } from './context/product-context';
import { Order } from './pages/order/order';
import { OrderConfirmation } from './pages/order/order-confirmation';

function App() {
  return (
    <div className='App'>
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />'
            <Route path='/confirmation' element={<OrderConfirmation />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
