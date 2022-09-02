import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from '../store';

function Price() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  if (condition.location === "흑석" && condition.drink === "o"){
    return (
      <div className="App">
        <div className='question'>
          <p>당신의 예산은?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '비쌈'
          dispatch(addPrice('비쌈'));
          navigate('/algorithm/experience');
        }}>
          여유있어요
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '저렴'
          dispatch(addPrice('저렴'));
          navigate('/algorithm/group');
        }}>
          빡빡해요...
        </button>
      </div>
    );
  }
  else if (condition.location === "흑석" && condition.drink === "x"){
    return (
      <div className="App">
        <div className='question'>
          <p>당신의 예산은?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addPrice('비쌈'));
          navigate('/algorithm/ingredients');
        }}>
          여유있어요
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addPrice('저렴'));
          navigate('/algorithm/nation');
        }}>
          빡빡해요...
        </button>
      </div>
    );
  }
  else if (condition.location === "상도" && condition.drink === "o"){
    return (
      <div className="App">
        <div className='question'>
          <p>당신의 예산은?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addPrice('비쌈'));
          navigate('/algorithm/nation');
        }}>
          여유있어요
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addPrice('저렴'));
          navigate('/algorithm/mood');
        }}>
          빡빡해요...
        </button>
      </div>
    );
  }
  else if (condition.location === "상도" && condition.drink === "x"){
    return (
      <div className="App">
        <div className='question'>
          <p>당신의 예산은?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addPrice('비쌈'));
          navigate('/algorithm/ingredients');
        }}>
          여유있어요
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addPrice('저렴'));
          navigate('/algorithm/nation');
        }}>
          빡빡해요...
        </button>
      </div>
    );
  }
}

export default Price;