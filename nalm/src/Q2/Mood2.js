import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addMood } from "../store.js";

function Mood2() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>어떤 분위기가 좋은가요?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '조용'
        dispatch(addMood('조용'));
        navigate('/algorithm/drink_category2');
      }}>
        조용한 곳
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '신남'
        dispatch(addMood('신남'));
        navigate('/algorithm/result');
      }}>
        신나는 곳
      </button>
    </div>
  );
}

export default Mood2;