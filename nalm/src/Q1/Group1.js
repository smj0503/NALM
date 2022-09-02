import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../store.js";

function Group1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>몇 명이서 먹나요?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'x'
        //dispatch(addGroup("x"));
        navigate('/algorithm/result');
      }}>
        2~4명
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'o'
        dispatch(addGroup("o"));
        navigate('/algorithm/result');
      }}>
        5명 이상
      </button>
    </div>
  );
}

export default Group1;