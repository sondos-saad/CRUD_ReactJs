
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './component/Navbar';
import SideBar from './component/SideBar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className=' flex gap-10'>
            <div className='w-[20%]'>
                    <SideBar/>
            </div>
            <div className='w-[75%]'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="products/add" element={<AddProduct/>}/>
                </Routes>
            </div>
        </div>
    </div>
  );
}

export default App;
