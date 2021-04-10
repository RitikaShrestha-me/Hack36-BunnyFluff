import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="contents">
        <Home />
        <Login />
        <Register />
        <Contact />
      </div>
    </div>
  );
}

export default App;
