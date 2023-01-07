import Navbar from './components/Navbar'
import Testform from './components/Textform'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import About from './components/About'
import { Fragment, useState } from 'react'
import Alert from './components/Alert'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, SetMode] = useState('light')
  const [color, SetColor] = useState('black')
  const [alert, SetAlert] = useState(null)
  // const { user } = useAuth0()
  const { user, isAuthenticated } = useAuth0();

  const showAlert = (message, type) => {
    SetAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      SetAlert(null)
    }, 1800)
  }
  const togglemode = () => {
    if (mode === 'light') {
      SetMode('dark')
      SetColor('white')
      // to set the entire body black
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode has enabled', 'info')
    } else {
      SetColor('black')
      SetMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has enabled', 'info')
    }
  }

  return (
    <Fragment>
      <Router>
        <Navbar tittle="TextUtils" mode={mode} mode2={color} togglefunc={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={color} mode2={mode} />}
            />

            <Route
              exact
              path="/"
              element={
                <Testform
                  heading= {`Hi, ${isAuthenticated ? user.name : "write your text"} `}
                  showAlert={showAlert}
                  mode={color}
                  mode2={mode}
                ></Testform>
              }
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  )
}

export default App
