import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addMood } from "../store.js";

function Mood() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.experience === "익숙함" && condition.ingredients === "육류") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 분위기가 좋은가요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '조용'
          dispatch(addMood('조용'));
          navigate('/algorithm/result');
        }}>
          조용한 곳
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '신남'
          dispatch(addMood('신남'));
          navigate('/algorithm/group');
        }}>
          신나는 곳
        </button>
      </div>
    );
  }
  // Case 2
  else if (condition.location === "흑석" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.experience === "색다름" ) {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 분위기가 좋은가요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('조용'));
          navigate('/algorithm/drink_category');
        }}>
          조용한 곳
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('신남'));
          navigate('/algorithm/result');
        }}>
          신나는 곳
        </button>
      </div>
    );
  }
  // Case 3
  else if (condition.location === "흑석" && condition.drink === "o" 
  && condition.price === "저렴" && condition.group === "") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 분위기가 좋은가요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('조용'));
          navigate('/algorithm/result');
        }}>
          조용한 곳
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('신남'));
          navigate('/algorithm/result');
        }}>
          신나는 곳
        </button>
      </div>
    );
  }
  // Case 4
  else if (condition.location === "상도" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.nation === "일식") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 분위기가 좋은가요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('조용'));
          navigate('/algorithm/result');
        }}>
          조용한 곳
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('신남'));
          navigate('/algorithm/result');
        }}>
          신나는 곳
        </button>
      </div>
    );
  }
  // Case 5
  else if (condition.location === "상도" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.experience === "익숙함") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 분위기가 좋은가요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('조용'));
          navigate('/algorithm/result');
        }}>
          조용한 곳
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('신남'));
          navigate('/algorithm/group');
        }}>
          신나는 곳
        </button>
      </div>
    );
  }
  // Case 6
  else if (condition.location === "상도" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.experience === "색다름") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 분위기가 좋은가요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('조용'));
          navigate('/algorithm/drink_category');
        }}>
          조용한 곳
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('신남'));
          navigate('/algorithm/result');
        }}>
          신나는 곳
        </button>
      </div>
    );
  }
  // Case 7
  else if (condition.location === "상도" && condition.drink === "o" && condition.price === "저렴") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 분위기가 좋은가요?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('조용'));
          navigate('/algorithm/experience');
        }}>
          조용한 곳
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addMood('신남'));
          navigate('/algorithm/result');
        }}>
          신나는 곳
        </button>
      </div>
    );
  }
}

export default Mood;