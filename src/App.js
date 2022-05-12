import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/manage-product' element={<ManageProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
