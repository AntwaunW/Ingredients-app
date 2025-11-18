import './styles/app.scss';

// (npm starting code) cd C:\Users\antwa\ingredients_app

import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/Sign_In';
import Landing from './pages/Landing';
import LoginPage from './pages/Login';
import SignUp from './pages/SignUp';
import SelectIngredients from './pages/SelectIngredients';
import FoodStyle from './pages/Food_Style';
import GenerateRecipes from './pages/GeneratingRecipes';
import RecipeList from './pages/RecipeList';
import Home from './pages/Landing';
import Calendar from './pages/Calendar';
import Favorites from './pages/Favorites';
import UserPage from './pages/UserPage';


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Landing />} /> 
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Sign_in' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp /> } />
          <Route path='/SelectIngredients' element={<SelectIngredients />} />
          <Route path='/Food_Style' element={<FoodStyle />} />
          <Route path='/GeneratingRecipes' element={<GenerateRecipes />} />
          <Route path='/RecipeList' element={<RecipeList />} />
          <Route path='/Calendar' element={<Calendar />} />
          <Route path='/Favorites' element={<Favorites />} />
          <Route path='/UserPage' element={<UserPage />} />
          <Route path='/Landing' element={<Home />} />
      </Routes>
    </>  
  );
}

export default App

