import './App.css';
import './reponsive.css'
import FormInput from './components/input/formInput';
import FlashCards from './components/myFlashCards/flashCardComponent';
import NavBar from './components/navbar/Navbar';
import TermCards from './components/myTermCards/TermCards';
import { Routes,Route } from 'react-router';


function App(){
    return(<>

    <div className="area"> 
    
            {/* Navbar has been made always available on top and all the pages will be rendered below it */}

            <NavBar/>  

            {/* Routed all the pages here according to their end points*/}

            <Routes>
                <Route path="/" element={<FormInput/>}/>
                <Route path="flashCards" element={<FlashCards/>}/>
                <Route path="flashCards/termcards" element={<TermCards/>}/>
            </Routes>

    </div>

    </>)
}

export default App;
