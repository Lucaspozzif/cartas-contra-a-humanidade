//Dependecies
import {BrowserRouter,Route, Routes} from 'react-router-dom'

//Pages
import { HomePage } from './Pages/HomePage/homePage';
import { TestPage } from './Pages/Test/testPage';
import { NotFoundPage } from './Pages/404/404Page';
import { DeckPage } from './Pages/DeckPage/deckPage';
import { EnterRoom } from './Pages/EnterRoom/enterRoom';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} ></Route>
      <Route path='/e' element={<EnterRoom />} ></Route>
      <Route path='/debug' element={<TestPage />} ></Route>
      <Route path='d/details/:deckId' element={<DeckPage />} ></Route>
      <Route path='*' element={<NotFoundPage />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}