//Dependecies
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { NotFoundPage } from './Pages/404/404Page';

//Pages
import { HomePage } from './Pages/HomePage/homePage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} ></Route>
      <Route path='*' element={<NotFoundPage />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}