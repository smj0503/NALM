import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addTime } from "../store.js";

function Time1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>먹는데 쓰는 시간은?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '초스피드'
        dispatch(addTime('1'));
        navigate('/algorithm/kor_category2_1');
      }}>
        최대한 짧게
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '중간'
        dispatch(addTime('2'));
        navigate('/algorithm/kor_category1_1');
      }}>
        적당히
      </button>
    </div>
  );
}

export default Time1;