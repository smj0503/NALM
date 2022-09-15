import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addTime } from "../store.js";
import styled from "styled-components";

const BackBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  color: #ff7373;
  :hover {
    transform: scale(1.1);
  }
  transition: .2s;
`;

function Time() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "x" 
  && condition.price === "저렴" && condition.nation === "한식"){
    return (
      <div className="App">
        <div className='question'>
          <p>먹는데 쓰는 시간은?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '초스피드'
          dispatch(addTime('1'));
          navigate('/algorithm/kor_category2');
        }}>
          최대한 짧게
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '중간'
          dispatch(addTime('2'));
          navigate('/algorithm/kor_category1');
        }}>
          적당히
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addTime(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 2
  else {
    return (
      <div className="App">
        <div className='question'>
          <p>먹는데 쓰는 시간은?</p>
        </div>
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addTime('1'));
          navigate('/algorithm/result24');
        }}>
          최대한 짧게
        </button>
        &emsp;
        <button class="w-btn w-btn-pink" type="button" onClick={()=>{
          dispatch(addTime('2'));
          navigate('/algorithm/amount');
        }}>
          적당히
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addTime(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
}

export default Time;