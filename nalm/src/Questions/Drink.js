import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addDrink } from '../store.js';
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

function Drink() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='question'>
        <p>술 한잔 어때요?</p>
      </div>
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'o'
        dispatch(addDrink('o'));
        navigate('/algorithm/price');
      }}>
        &nbsp;&emsp;좋아요&emsp;&nbsp;
      </button>
      &emsp;
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'x'
        dispatch(addDrink('x'));
        navigate('/algorithm/price');
      }}>
        밥만 먹을래요
      </button>
      <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addDrink(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
    </div>
  );
}

export default Drink;