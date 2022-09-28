import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addLocation } from '../store.js';
import styled from "styled-components";
import character from "../../src/img/Q_location.png"

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

function Location() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='img'>
        <img src={character} width='20%'/>
      </div>
      <div className='question'>
        <p>어디로 가볼까요?</p>
      </div>
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '흑석'
        dispatch(addLocation('흑석'));
        navigate('/algorithm/drink');
      }}>
        흑석
      </button>
      &emsp;
      <button class="w-btn" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '상도'
        dispatch(addLocation('상도'));
        navigate('/algorithm/drink');
      }}>
        상도
      </button>
      <div className='back'>
        <BackBtn onClick={()=>{ 
          dispatch(addLocation(''));
          navigate(-1);
        }}>
          Back
        </BackBtn>
      </div>
    </div>
  );
}

export default Location;