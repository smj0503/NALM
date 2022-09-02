import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addNation } from "../store.js";

function Nation1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>어느 나라로 가볼까요~?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '한식'
        dispatch(addNation('한식'));
        navigate('/algorithm/result');
      }}>
        한식
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '중식'
        dispatch(addNation('중식'));
        navigate('/algorithm/result');
      }}>
        중식
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '일식'
        dispatch(addNation('일식'));
        navigate('/algorithm/result');
      }}>
        일식
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '미국'
        dispatch(addNation('미국'));
        navigate('/algorithm/result');
      }}>
        미국
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '이태리'
        dispatch(addNation('이태리'));
        navigate('/algorithm/drink_category1');
      }}>
        이태리
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        navigate('/algorithm/mood2');
      }}>
        상관없어요
      </button>
    </div>
  );
}

export default Nation1;