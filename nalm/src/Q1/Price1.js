import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from '../store';

function Price1() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>당신의 예산은?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '비쌈'
        dispatch(addPrice('비쌈'));
        navigate('/algorithm/experience1');
      }}>
        여유있어요
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '저렴'
        dispatch(addPrice('저렴'));
        navigate('/algorithm/group2');
      }}>
        빡빡해요...
      </button>
    </div>
  );
}

export default Price1;