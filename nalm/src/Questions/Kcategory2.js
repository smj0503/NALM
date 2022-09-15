import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addKcategory2 } from "../store.js";
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

function Kcategory2() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='question'>
        <p>먹고 싶은 음식은?</p>
      </div>
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '돈까스'
        dispatch(addKcategory2('돈까스'));
        navigate('/algorithm/result15');
      }}>
        &emsp;&emsp;돈까스&emsp;&emsp;
      </button>
      &emsp;
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '떡볶이'
        dispatch(addKcategory2('떡볶이'));
        navigate('/algorithm/result15');
      }}>
        &emsp;&emsp;떡볶이&emsp;&emsp;
      </button>
      &emsp;
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '국수'
        dispatch(addKcategory2('국수'));
        navigate('/algorithm/result15');
      }}>
        &emsp;&emsp;국수류&emsp;&emsp;
      </button>
      &emsp;
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '아무거나'
        dispatch(addKcategory2('아무거나'));
        navigate('/algorithm/result15');
      }}>
        김밥같은 간편식
      </button>
      <div className='back'>
          <BackBtn onClick={()=>{ 
            dispatch(addKcategory2(''));
            navigate(-1);
          }}>
            Back
          </BackBtn>
        </div>
    </div>
  );
}

export default Kcategory2;