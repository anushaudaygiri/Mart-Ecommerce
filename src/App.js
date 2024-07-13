
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/navbar/Navbar'

import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
     <Navbar/>
  <Home/>
    </div>
  );
}

export default App;
