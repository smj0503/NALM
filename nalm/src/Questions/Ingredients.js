import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addIngredients } from "../store.js";
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

function Ingredients() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "o" 
  && condition.price === "비쌈" && condition.experience === "익숙함") {
    return (
      <div className="App">
        <div className='question'>
          <p>더 땡기는 것은 어느 쪽?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '육류'
          dispatch(addIngredients('육류'));
          navigate('/algorithm/mood');
        }}>
          &nbsp;육류&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '해산물'
          dispatch(addIngredients('해산물'));
          navigate('/algorithm/result1');
        }}>
          해산물
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addIngredients(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 2
  else if (condition.location === "흑석" && condition.drink === "x" && condition.price === "비쌈") {
    return (
      <div className="App">
        <div className='question'>
          <p>더 땡기는 것은 어느 쪽?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addIngredients('육류'));
          navigate('/algorithm/amount');
        }}>
          &nbsp;육류&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addIngredients('해산물'));
          navigate('/algorithm/result10');
        }}>
          해산물
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addIngredients(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 3
  else if (condition.location === "상도" && condition.drink === "x" && condition.price === "비쌈") {
    return (
      <div className="App">
        <div className='question'>
          <p>더 땡기는 것은 어느 쪽?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addIngredients('육류'));
          navigate('/algorithm/result24');
        }}>
          &nbsp;육류&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addIngredients('해산물'));
          navigate('/algorithm/result24');
        }}>
          해산물
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addIngredients(''));
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
          <p>더 땡기는 것은 어느 쪽?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addIngredients('육류'));
          navigate('/algorithm/result22');
        }}>
          &nbsp;육류&nbsp;
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addIngredients('해산물'));
          navigate('/algorithm/result22');
        }}>
          해산물
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : 'x'
          dispatch(addIngredients('x'));
          navigate('/algorithm/result22');
        }}>
          둘다 NO
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addIngredients(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
}

export default Ingredients;