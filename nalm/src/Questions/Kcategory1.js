import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addKcategory1 } from "../store.js";
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

function Kcategory1() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='question'>
        <p>먹고 싶은 음식은?</p>
      </div>
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '찌개'
        dispatch(addKcategory1('찌개'));
        navigate('/algorithm/result14');
      }}>
        찌개나 국물류
      </button>
      &emsp;
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '백반'
        dispatch(addKcategory1('백반'));
        navigate('/algorithm/result14');
      }}>
        백반 종류
      </button>
      <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addKcategory1(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
    </div>
  );
}

export default Kcategory1;