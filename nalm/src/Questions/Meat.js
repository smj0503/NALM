import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addMeat } from '../store';

function Meat() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  return (
    <div className="App">
      <div className='question'>
        <p>고기가 들어간 음식이어야 하나요?</p>
      </div>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'o'
        dispatch(addMeat('o'));
        navigate('/algorithm/group');
      }}>
        네
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'x'
        dispatch(addMeat('x'));
        navigate('/algorithm/result');
      }}>
        아니요
      </button>
    </div>
  );
  
}

export default Meat;