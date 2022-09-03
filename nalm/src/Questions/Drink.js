import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addDrink } from '../store.js';

function Drink() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='question'>
        <p>술 한잔 어때요?</p>
      </div>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'o'
        dispatch(addDrink('o'));
        navigate('/algorithm/price');
      }}>
        &nbsp;&emsp;좋아요&emsp;&nbsp;
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'x'
        dispatch(addDrink('x'));
        navigate('/algorithm/price');
      }}>
        밥만 먹을래요
      </button>
    </div>
  );
}

export default Drink;