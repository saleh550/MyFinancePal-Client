
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { useTranslation } from 'react-i18next';

function App() {
  const {t,i18n}=useTranslation()
  const switchLanguageEN =()=>{
    i18n.changeLanguage('en') 
  }
  const switchLanguageHB=()=>{
    i18n.changeLanguage('hb') 

  }
  return (
<>
<button onClick={switchLanguageEN}>english</button>
<button onClick={switchLanguageHB}>hebrew</button>
<Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
      </Router>

</>
  );
}

export default App;
