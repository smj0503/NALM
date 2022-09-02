import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addIngredients } from "../store.js";

function Ingredients1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>더 땡기는 것은 어느 쪽?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '육류'
        dispatch(addIngredients('육류'));
        navigate('/algorithm/mood1');
      }}>
        육류
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '해산물'
        dispatch(addIngredients('해산물'));
        navigate('/algorithm/result');
      }}>
        해산물
      </button>
    </div>
  );
}

export default Ingredients1;