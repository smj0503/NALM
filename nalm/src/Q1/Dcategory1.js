import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addDcategory } from "../store.js";

function Dcategory1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>어떤 술로 가볼까요~?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '양주'
        dispatch(addDcategory('양주'));
        navigate('/algorithm/result');
      }}>
        와인 / 칵테일
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '호프'
        dispatch(addDcategory('호프'));
        navigate('/algorithm/result');
      }}>
        호프
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '전부'
        dispatch(addDcategory('전부'));
        navigate('/algorithm/result');
      }}>
        골라 먹을래요
      </button>
    </div>
  );
}

export default Dcategory1;