import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addDcategory } from "../store.js";

function Dcategory() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "o" && condition.price === "비쌈"
  && condition.experience === "색다름" && condition.nation === "이태리") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 술로 가볼까요~?</p>
        </div>
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
          // 데이터 넘겨줌 : '모두'
          dispatch(addDcategory('모두'));
          navigate('/algorithm/result');
        }}>
          골라 먹을래요
        </button>
      </div>
    );
  }
  // Case 2
  else if (condition.location === "흑석" && condition.drink === "o" && condition.price === "비쌈"
  && condition.experience === "색다름" && condition.mood === "조용") {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 술로 가볼까요~?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addDcategory('양주'));
          navigate('/algorithm/result');
        }}>
          와인 / 칵테일
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '이자카야'
          dispatch(addDcategory('이자카야'));
          navigate('/algorithm/result');
        }}>
          이자카야
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addDcategory('호프'));
          navigate('/algorithm/result');
        }}>
          호프
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addDcategory('모두'));
          navigate('/algorithm/result');
        }}>
          골라 먹을래요
        </button>
      </div>
    );
  }
  // Case 3
  else {
    return (
      <div className="App">
        <div className='question'>
          <p>어떤 술로 가볼까요~?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addDcategory('양주'));
          navigate('/algorithm/result');
        }}>
          와인 / 칵테일
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addDcategory('이자카야'));
          navigate('/algorithm/result');
        }}>
          이자카야
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addDcategory('호프'));
          navigate('/algorithm/result');
        }}>
          호프
        </button>
      </div>
    );
  }
  
}

export default Dcategory;