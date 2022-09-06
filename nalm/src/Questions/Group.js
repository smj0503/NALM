import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../store.js";

function Group() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.experience === "익숙함" 
  && condition.ingredients === "육류" && condition.mood === "신남") {
    return (
      <div className="App">
        <div className='question'>
          <p>몇 명이서 먹나요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 안넘겨줌
          dispatch(addGroup(""));
          navigate('/algorithm/result3');
        }}>
          2~4명
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : 'o'
          dispatch(addGroup("o"));
          navigate('/algorithm/result3');
        }}>
          5명 이상
        </button>
      </div>
    );
  }
  // Case 2
  else if (condition.location === "흑석" && condition.drink === "o" && condition.price === "저렴"){
    return (
      <div className="App">
        <div className='question'>
          <p>몇 명이서 먹나요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addGroup(""));
          navigate('/algorithm/mood');
        }}>
          2~4명
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addGroup("o"));
          navigate('/algorithm/result8');
        }}>
          5명 이상
        </button>
      </div>
    );
  }
  // Case 3
  else if (condition.location === "상도" && condition.drink === "o" && condition.price === "비쌈"
  && condition.nation === "한식" && condition.meat === "o"){
    return (
      <div className="App">
        <div className='question'>
          <p>몇 명이서 먹나요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addGroup(""));
          navigate('/algorithm/result17');
        }}>
          2~4명
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : 'o'
          dispatch(addGroup("o"));
          navigate('/algorithm/result16');
        }}>
          5명 이상
        </button>
      </div>
    );
  }
  // Case 4
  else {
    return (
      <div className="App">
        <div className='question'>
          <p>몇 명이서 먹나요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 안넘겨줌
          dispatch(addGroup(""));
          navigate('/algorithm/ingredients');
        }}>
          2~4명
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addGroup("o"));
          navigate('/algorithm/result21');
        }}>
          5명 이상
        </button>
      </div>
    );
  }
}

export default Group;