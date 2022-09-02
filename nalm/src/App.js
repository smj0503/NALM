import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';

import Algorithm from './Algorithm.js';
import Location from './Location.js';
import Drink from './Drink.js';
import Result from './Result.js';

import Price from './Questions/Price.js';
import Experiecne from './Questions/Experience.js';
import Ingredients from './Questions/Ingredients.js';
import Mood from './Questions/Mood.js';
import Time from './Questions/Time.js';

// Q1
import Price1 from './Q1/Price1.js';
import Time1 from './Q1/Time1.js';
import Amount1 from './Q1/Amount1.js';
import Dcategory1 from './Q1/Dcategory1.js';
import Experience1 from './Q1/Experience1.js';
import Group1 from './Q1/Group1.js';
import Ingredients1 from './Q1/Ingredients1.js';
import Kcategory1_1 from './Q1/Kcategory1_1.js';
import Kcategory2_1 from './Q1/Kcategory2_1.js';
import Mood1 from './Q1/Mood1.js';
import Nation1 from './Q1/Nation1.js';

// Q2
import Price2 from './Q2/Price2.js';
import Dcategory2 from './Q2/Dcategory2.js';
import Experience2 from './Q2/Experience2.js';
import Group2 from './Q2/Group2.js';
import Ingredients2 from './Q2/Ingredients2.js';
import Mood2 from './Q2/Mood2.js';
import Nation2 from './Q2/Nation2.js';

// Q3
import Mood3 from './Q3/Mood3.js';

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div className="head">
        <img src="img/logo.png" width='15%'/>
      </div>
    
      <Routes>
        <Route path="/" element={ 
          <div className="App">
            <div className='img'>
              <img src="img/LM2.png" width='20%'/>
            </div>
            <div className='question'>
              <p>간단한 물음에 답하며 먹고싶은 메뉴를 떠올려보세요 !</p>
            </div>
            <button class="w-btn w-btn-pink" type="button" onClick={()=>{navigate('/algorithm/location')}}>
              GO!
            </button>
          </div>
         } />

        <Route path="/algorithm" element={ <Algorithm/> }>
          <Route path="location" element={ <Location/> } />
          <Route path="drink" element={ <Drink/> } />
          <Route path="result" element={ <Result/> } />

          <Route path="price" element={ <Price/> } />
          <Route path="experience" element={ <Experiecne/> } />
          <Route path="ingredients" element={ <Ingredients/> } />
          <Route path="mood" element={ <Mood/> } />
          <Route path="time" element={ <Time/> } />

          <Route path="amount1" element={ <Amount1/> } />
          <Route path="drink_category1" element={ <Dcategory1/> } />
          <Route path="experience1" element={ <Experience1/> } />
          <Route path="group1" element={ <Group1/> } />
          <Route path="ingredients1" element={ <Ingredients1/> } />
          <Route path="kor_category1_1" element={ <Kcategory1_1/> } />
          <Route path="kor_category2_1" element={ <Kcategory2_1/> } />
          <Route path="mood1" element={ <Mood1/> } />
          <Route path="nation1" element={ <Nation1/> } />
          <Route path="price1" element={ <Price1/> } />
          <Route path="time1" element={ <Time1/> } />

          <Route path="drink_category2" element={ <Dcategory2/> } />
          <Route path="experience2" element={ <Experience2/> } />
          <Route path="group2" element={ <Group2/> } />
          <Route path="ingredients2" element={ <Ingredients2/> } />
          <Route path="mood2" element={ <Mood2/> } />
          <Route path="nation2" element={ <Nation2/> } />
          <Route path="price2" element={ <Price2/> } />

          <Route path="mood3" element={ <Mood3/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
