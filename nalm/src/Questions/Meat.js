import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addMeat } from '../store';
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

function Meat() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='question'>
        <p>고깃집을 원하나요??</p>
      </div>
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'o'
        dispatch(addMeat('o'));
        navigate('/algorithm/group');
      }}>
        네
      </button>
      &emsp;
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : 'x'
        dispatch(addMeat('x'));
        navigate('/algorithm/result17');
      }}>
        아니요
      </button>
      <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addMeat(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
    </div>
  );
}

export default Meat;