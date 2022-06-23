import './App.css';
import logo from './asset/logo.png';
import logoback from'./asset/logoback.svg';

function App() {
  return (
   
    <header>
      <div>
        <img src={logoback}/>
        <img src={logo} />
      </div>
    </header>
  )
}

export default App;
