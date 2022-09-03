import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from '../store.js';

import styled from "styled-components"

const Button = styled.button`
  :hover {
    transform: scale(1.2);
  }  
  transition: .2s;
  background-color: inherit;
  color: #ff7373;
  border: 0;
`;

function Location() {

  const navigate = useNavigate();

  // Redux store에서 condition state 가져옴
  let condition = useSelector((state)=> state.condition);
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div className='question'>
        <p>어디로 가볼까요?</p>
      </div>
      <Button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '흑석'
        dispatch(addLocation('흑석'));
        navigate('/algorithm/drink');
      }}>
        흑석
      </Button>
      &emsp;
      <Button class="w-btn w-btn-pink" type="button" onClick={()=>{
        // 데이터 넘겨줌 : '상도'
        dispatch(addLocation('상도'));
        navigate('/algorithm/drink');
      }}>
        상도
      </Button>
    </div>
  );
}

export default Location;