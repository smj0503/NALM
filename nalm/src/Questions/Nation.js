import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addNation } from "../store.js";
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

function Nation() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.experience === "색다름") {
    return (
      <div className="App">
        <div className='question'>
          <p>어느 나라로 가볼까요~?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '한식'
          dispatch(addNation('한식'));
          navigate('/algorithm/result4');
        }}>
          &nbsp;한식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '중식'
          dispatch(addNation('중식'));
          navigate('/algorithm/result4');
        }}>
          &nbsp;중식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '일식'
          dispatch(addNation('일식'));
          navigate('/algorithm/result4');
        }}>
          &nbsp;일식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '미국'
          dispatch(addNation('미국'));
          navigate('/algorithm/result4');
        }}>
          &nbsp;미국&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '이태리'
          dispatch(addNation('이태리'));
          navigate('/algorithm/drink_category');
        }}>
          이태리
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation(''));
          navigate('/algorithm/mood');
        }}>
          상관없어요
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addNation(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 2
  else if (condition.location === "흑석" && condition.drink === "x" && condition.price === "저렴") {
    return (
      <div className="App">
        <div className='question'>
          <p>어느 나라로 가볼까요~?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('한식'));
          navigate('/algorithm/time');
        }}>
          &nbsp;한식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('중식'));
          navigate('/algorithm/experience');
        }}>
          &nbsp;중식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('일식'));
          navigate('/algorithm/experience');
        }}>
          &nbsp;일식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('미국'));
          navigate('/algorithm/result12');
        }}>
          &nbsp;미국&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('이태리'));
          navigate('/algorithm/result12');
        }}>
          이태리
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addNation(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 3
  else if (condition.location === "상도" && condition.drink === "o" && condition.price === "비쌈") {
    return (
      <div className="App">
        <div className='question'>
          <p>어느 나라로 가볼까요~?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('한식'));
          navigate('/algorithm/meat');
        }}>
          &nbsp;한식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('중식'));
          navigate('/algorithm/result18');
        }}>
          &nbsp;중식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('일식'));
          navigate('/algorithm/mood');
        }}>
          &nbsp;일식&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('미국'));
          navigate('/algorithm/result18');
        }}>
          &nbsp;미국&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('이태리'));
          navigate('/algorithm/result18');
        }}>
          이태리
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation(''));
          navigate('/algorithm/experience');
        }}>
          상관없어요
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addNation(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 4
  else {
    return (
      <div className="App">
        <div className='question'>
          <p>어느 나라로 가볼까요~?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('한식'));
          navigate('/algorithm/time');
        }}>
          한식
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('중식'));
          navigate('/algorithm/result24');
        }}>
          중식
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('일식'));
          navigate('/algorithm/result24');
        }}>
          일식
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addNation('미국'));
          navigate('/algorithm/result24');
        }}>
          미국
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addNation(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
}

export default Nation;