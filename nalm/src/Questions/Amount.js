import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addAmount } from "../store.js";

function Amount() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "x" 
  && condition.price === "비쌈" && condition.ingredients === "육류"){
    return (
      <div className="App">
        <div className='question'>
          <p>음식 양은 어느정도가 괜찮을까요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '적당'
          dispatch(addAmount('적당'));
          navigate('/algorithm/result11');
        }}>
          적당히 먹을래요
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '많음'
          dispatch(addAmount('많음'));
          navigate('/algorithm/result11');
        }}>
          양이 많았으면 해요
        </button>
      </div>
    );
  }
  // Case 2
  else {
    return (
      <div className="App">
        <div className='question'>
          <p>음식 양은 어느정도가 괜찮을까요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addAmount('적당'));
          navigate('/algorithm/result24');
        }}>
          적당히 먹을래요
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addAmount('많음'));
          navigate('/algorithm/result24');
        }}>
          양이 많았으면 해요
        </button>
      </div>
    );
  }
}

export default Amount;