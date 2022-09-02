import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import Place from './Place';

import { useDispatch, useSelector } from "react-redux";

function Result() {
  // DB에서 불러온 데이터 담아 줄 state
  let [list, setList] = useState([]);

  let condition = useSelector((state)=> state.condition);
  console.log(condition);

  return (
    <div className="App">
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
      <br></br>
      <p>
        { list.map((a, i)=>{
          return(<Place list={list[i]} i={i+1}/>)
        })}
      </p>

    </div>

  );
}

export default Result;