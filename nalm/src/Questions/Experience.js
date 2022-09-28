import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from '../store';
import styled from "styled-components";
import character from "../../src/img/Q_experience.png"

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

function Experiecne() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  // Case 1
  if (condition.location === "흑석" && condition.drink === "o" && condition.price === "비쌈") {
    return (
      <div className="App">
        <div className='img'>
          <img src={character} width='20%'/>
        </div>
        <div className='question'>
          <p>지금 더 끌리는 곳은?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '익숙함'
          dispatch(addExperience('익숙함'));
          navigate('/algorithm/ingredients');
        }}>
          익숙한 곳
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          // 데이터 넘겨줌 : '색다름'
          dispatch(addExperience('색다름'));
          navigate('/algorithm/nation');
        }}>
          색다른 곳
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addExperience(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 2
  else if (condition.location === "흑석" && condition.drink === "x" && condition.price === "저렴"
  && (condition.nation === "중식" || condition.nation === "일식")) {
    return (
      <div className="App">
        <div className='img'>
          <img src={character} width='20%'/>
        </div>
        <div className='question'>
          <p>지금 더 끌리는 곳은?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addExperience('익숙함'));
          navigate('/algorithm/result13');
        }}>
          익숙한 곳
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addExperience('색다름'));
          navigate('/algorithm/result13');
        }}>
          색다른 곳
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addExperience(''));
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
        <div className='img'>
          <img src={character} width='20%'/>
        </div>
        <div className='question'>
          <p>지금 더 끌리는 곳은?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addExperience('익숙함'));
          navigate('/algorithm/mood');
        }}>
          익숙한 곳
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addExperience('색다름'));
          navigate('/algorithm/mood');
        }}>
          색다른 곳
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addExperience(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
  // Case 4
  else if (condition.location === "상도" && condition.drink === "o" 
  && condition.price === "저렴" && condition.mood === "조용") {
    return (
      <div className="App">
        <div className='img'>
          <img src={character} width='20%'/>
        </div>
        <div className='question'>
          <p>지금 더 끌리는 곳은?</p>
        </div>
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addExperience('익숙함'));
          navigate('/algorithm/result24');
        }}>
          익숙한 곳
        </button>
        &emsp;
        <button class="w-btn" type="button" onClick={()=>{
          dispatch(addExperience('색다름'));
          navigate('/algorithm/result24');
        }}>
          색다른 곳
        </button>
        <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addExperience(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
      </div>
    );
  }
}

export default Experiecne;