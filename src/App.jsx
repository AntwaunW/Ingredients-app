import './styles/app.scss';

// (npm starting code) cd C:\Users\antwa\ingredients_app

import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/Sign_In';
import Landing from './pages/Landing';
import LoginPage from './pages/Login';


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Landing />} /> 
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Sign_in' element={<SignIn />} />
      </Routes>
    </>  
  );
}

export default App

