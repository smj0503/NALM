import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addKcategory2 } from "../store.js";

function Kcategory2() {

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
        // 데이터 넘겨줌 : '돈까스'
        dispatch(addKcategory2('돈까스'));
        navigate('/algorithm/result');
      }}>
        돈까스
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '떡볶이'
        dispatch(addKcategory2('떡볶이'));
        navigate('/algorithm/result');
      }}>
        떡볶이
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '국수'
        dispatch(addKcategory2('국수'));
        navigate('/algorithm/result');
      }}>
        국수류
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '아무거나'
        dispatch(addKcategory2('아무거나'));
        navigate('/algorithm/result');
      }}>
        김밥같은 간편식
      </button>
    </div>
  );
}

export default Kcategory2;