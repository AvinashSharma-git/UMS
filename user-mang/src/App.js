import logo from './logo.svg';
import './App.css';

import {UserManagement} from './UserManagement';
import {Navigation} from './Navigation';

import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="Container">
      <h3 className="m-3 d-flex justify-content-center">
   

      </h3>
      <Navigation/>
      <Routes>
        <Route path="/" element={<UserManagement/>}/>
       {/*<Route path='/UserManagement' element={<UserManagement/>} /> */}
       {/*  <Route path='/Navigation' element={<Navigation/>} />*/}
        
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
