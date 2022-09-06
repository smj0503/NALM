import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Result1 from './Results/Result1.js';
import Result2 from './Results/Result2.js';
import Result3 from './Results/Result3.js';
import Result4 from './Results/Result4.js';
import Result5 from './Results/Result5.js';
import Result6 from './Results/Result6.js';
import Result7 from './Results/Result7.js';
import Result8 from './Results/Result8.js';
import Result9 from './Results/Result9.js';
import Result10 from './Results/Result10.js';
import Result11 from './Results/Result11.js';
import Result12 from './Results/Result12.js';
import Result13 from './Results/Result13.js';
import Result14 from './Results/Result14.js';
import Result15 from './Results/Result15.js';

function App() {

  const navigate = useNavigate();

  return (
    <>
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
          <Route path="result1" element={ <Result1/> } />
          <Route path="result2" element={ <Result2/> } />
          <Route path="result3" element={ <Result3/> } />
          <Route path="result4" element={ <Result4/> } />
          <Route path="result5" element={ <Result5/> } />
          <Route path="result6" element={ <Result6/> } />
          <Route path="result7" element={ <Result7/> } />
          <Route path="result8" element={ <Result8/> } />
          <Route path="result9" element={ <Result9/> } />
          <Route path="result10" element={ <Result10/> } />
          <Route path="result11" element={ <Result11/> } />
          <Route path="result12" element={ <Result12/> } />
          <Route path="result13" element={ <Result13/> } />
          <Route path="result14" element={ <Result14/> } />
          <Route path="result15" element={ <Result15/> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
