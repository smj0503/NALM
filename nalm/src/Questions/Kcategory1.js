import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addKcategory1 } from "../store.js";

function Kcategory1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='question'>
        <p>먹고 싶은 음식은?</p>
      </div>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '찌개'
        dispatch(addKcategory1('찌개'));
        navigate('/algorithm/result14');
      }}>
        찌개나 국물류
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '백반'
        dispatch(addKcategory1('백반'));
        navigate('/algorithm/result14');
      }}>
        백반 종류
      </button>
    </div>
  );
}

export default Kcategory1;