import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addKcategory } from "../store.js";

function Kcategory1_1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>먹고 싶은 음식은?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '찌개'
        dispatch(addKcategory('찌개'));
        navigate('/algorithm/result');
      }}>
        찌개나 국물류
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '백반'
        dispatch(addKcategory('백반'));
        navigate('/algorithm/result');
      }}>
        백반 종류
      </button>
    </div>
  );
}

export default Kcategory1_1;