import '../App.css';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import Place1 from "../Places/Place1.js"

function Result1() {
  // DB에서 불러온 데이터 담아 줄 state
  let [list, setList] = useState([]);

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
          return(<Place1 list={list[i]} i={i+1}/>)
        })}
      </p>
    </div>
  );
}

export default Result1;