  import Navbar from './components/Navbar';
  import Testform from './components/Textform';
  import './App.css';
  // import About from './components/About';
  import { Fragment, useState } from 'react';
  import Alert from './components/Alert';
//   import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
    const [mode,SetMode] = useState('light')
    const [color,SetColor] = useState('black')
    const [alert,SetAlert] = useState(null)


    const showAlert = (message,type)=>{
     SetAlert({
      msg : message,
      type : type
     })
     setTimeout(() => {
      SetAlert(null)
     }, 1800);
    }
    const togglemode = ()=>{
      if(mode==='light'){
      SetMode('dark')
      SetColor('white')
      // to set the entire body black 
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has enabled","info")
    }
  else{
  SetColor('black')
      SetMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has enabled","info")
  }
    }

    return (
    <>
      {/* <Router> */}

     
  <Navbar tittle="TextUtils" mode={mode} togglefunc = {togglemode} />
  <Alert alert={alert} />

  <div className="container">
  {/* <Routes> */}
          {/* <Route exact path='/components/About' element={<About/>}> */}
          {/* <About mode={color} mode2={mode} />
          </Route>
          <Route path='/components/Textform'> */}
          <Testform heading="Enter the text to analyse" showAlert={showAlert}  mode={color} mode2={mode}></Testform>
          {/* </Route>
        </Routes> */}

  </div>
   {/* </Router> */}
    </>

    );
  }

  export default App;
