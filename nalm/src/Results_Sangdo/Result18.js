import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {addAmount, addDcategory, addDrink, addExperience,
  addGroup, addIngredients, addKcategory1, addKcategory2,
  addLocation, addMeat, addMood, addNation, 
  addPrice, addTime} from "../store.js";
import Place18 from "../Places_Sangdo/Place18.js"
import styled from "styled-components";

const Home = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  color: #ff7373;
  :hover {
    transform: scale(1.1);
  }
  transition: .2s;
`;

function Result18() {
  // DB에서 불러온 데이터 담아 줄 state
  let [list, setList] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let condition = useSelector((state)=> state.condition);
  console.log(condition);

  return (
    <div className="App">
      <div className='result'>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          axios.get('/data')
          .then((result)=>{
            let copy = [...list, ...result.data];
            setList(copy);
            console.log(result.data);
          })
          .catch(()=>{
            console.log('Fail to load!');
          });
        }}>결과 확인하기!</button>
      </div>
      <br/>
      <p>
        {list.map((a, i)=>{
          return(<Place18 list={list[i]} i={i+1}/>)
        })}
      </p>
      <div className='back'>
        <Home onClick={()=>{
          dispatch(addAmount(''));
          dispatch(addPrice(''));
          dispatch(addDcategory(''));
          dispatch(addDrink(''));
          dispatch(addExperience(''));
          dispatch(addGroup(''));
          dispatch(addIngredients(''));
          dispatch(addKcategory1(''));
          dispatch(addKcategory2(''));
          dispatch(addLocation(''));
          dispatch(addMeat(''));
          dispatch(addMood(''));
          dispatch(addNation(''));
          dispatch(addTime(''));
          navigate('/');
        }}>
          Home
        </Home>
      </div>
    </div>
  );
}

export default Result18;