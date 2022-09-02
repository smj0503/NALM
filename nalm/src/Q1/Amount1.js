import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addAmount } from "../store.js";

function Amount1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>음식 양은 어느정도?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '적당'
        dispatch(addAmount('적당'));
        navigate('/algorithm/result');
      }}>
        적당히 먹을래요
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '많음'
        dispatch(addAmount('많음'));
        navigate('/algorithm/result');
      }}>
        양이 많았으면 해요
      </button>
    </div>
  );
}

export default Amount1;