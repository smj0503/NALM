import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Button } from 'react-bootstrap';
import logo from "../src/img/logo.png"
import character from "../src/img/LM2.png"

import Algorithm from './Algorithm.js';

import Location from './Questions/Location.js';
import Drink from './Questions/Drink.js';
import Price from './Questions/Price.js';
import Experiecne from './Questions/Experience.js';
import Ingredients from './Questions/Ingredients.js';
import Mood from './Questions/Mood.js';
import Time from './Questions/Time.js';
import Amount from './Questions/Amount.js';
import Dcategory from './Questions/Dcategory.js';
import Meat from './Questions/Meat.js';
import Kcategory1 from './Questions/Kcategory1.js';
import Kcategory2 from './Questions/Kcategory2.js';
import Group from './Questions/Group.js';
import Nation from './Questions/Nation.js';

import Result from './Result.js';


function App() {

  const navigate = useNavigate();

  return (
    <>
    {/* <BrowserRouter> */}
      <div className="head">
        <img src={logo} width='15%'/>
      </div>
    
      <Routes>
        <Route path="/" element={ 
          <div className="App">
            <div className='img'>
              <img src={character} width='20%'/>
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
          <Route path="price" element={ <Price/> } />
          <Route path="experience" element={ <Experiecne/> } />
          <Route path="ingredients" element={ <Ingredients/> } />
          <Route path="mood" element={ <Mood/> } />
          <Route path="time" element={ <Time/> } />
          <Route path="amount" element={ <Amount/> } />
          <Route path="drink_category" element={ <Dcategory/> } />
          <Route path="meat" element={ <Meat/> } />
          <Route path="kor_category1" element={ <Kcategory1/> } />
          <Route path="kor_category2" element={ <Kcategory2/> } />
          <Route path="group" element={ <Group/> } />
          <Route path="nation" element={ <Nation/> } />

          <Route path="result" element={ <Result/> } />
        </Route>
      </Routes>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
