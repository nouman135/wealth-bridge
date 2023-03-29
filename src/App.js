import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import "./App.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Posts from './pages/Posts';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <div className="App">
 
     <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/post/*" element={<PageNotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
