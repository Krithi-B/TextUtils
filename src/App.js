import { useState } from 'react';
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  var removeBodyClasses = ()=> {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const capitalize=(word) => {
    if (!word) return "";
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    if (Mode === 'light') {
      document.body.classList.add('bg-dark');
      setMode('dark');
      showAlert(capitalize(cls)+" mode has been enabled","success");
    } else {
      document.body.classList.add('bg-light');
      setMode('light');
      showAlert(capitalize(cls)+" mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
    <NavBar title="TEXTUTILS" aboutText="About"  mode ={Mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode ={Mode}/>} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={Mode} />} />
      </Routes>
      </div>
    </Router>
    
    {/* <About/> */}
    
    </>
    
  );
}

export default App;
