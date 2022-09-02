import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from '../store';

function Experiecne2() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <p>지금 더 끌리는 곳은?</p>
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '익숙함'
        dispatch(addExperience('익숙함'));
        navigate('/algorithm/result');
      }}>
        익숙한 곳
      </button>
      &emsp;
      <button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '색다름'
        dispatch(addExperience('색다름'));
        navigate('/algorithm/result');
      }}>
        색다른 곳
      </button>
    </div>
  );
}

export default Experiecne2;