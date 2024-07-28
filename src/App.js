
import './App.css';
import Navbar from './component/Navbar';
import SideBar from './component/SideBar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='w-[80%] mx-auto flex gap-10'>
            <div className='w-[20%]'>
                    <SideBar/>
            </div>
            <div className='w-[75%]'>content</div>
        </div>
    </div>
  );
}

export default App;
