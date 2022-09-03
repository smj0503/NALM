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
import Amount from './Questions/Amount.js';
import Dcategory from './Questions/Dcategory.js';
import Meat from './Questions/Meat.js';

// Q1
import Group1 from './Q1/Group1.js';
import Kcategory1_1 from './Q1/Kcategory1_1.js';
import Kcategory2_1 from './Q1/Kcategory2_1.js';
import Nation1 from './Q1/Nation1.js';

// Q2
import Group2 from './Q2/Group2.js';
import Nation2 from './Q2/Nation2.js';

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
          <Route path="amount" element={ <Amount/> } />
          <Route path="drink_category" element={ <Dcategory/> } />
          <Route path="meat" element={ <Meat/> } />
          
          <Route path="group1" element={ <Group1/> } />
          <Route path="kor_category1_1" element={ <Kcategory1_1/> } />
          <Route path="kor_category2_1" element={ <Kcategory2_1/> } />
          <Route path="nation1" element={ <Nation1/> } />

          <Route path="group2" element={ <Group2/> } />
          <Route path="nation2" element={ <Nation2/> } />

        </Route>
      </Routes>
    </>
  );
}

export default App;
