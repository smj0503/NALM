import './App.css';
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: inherit;
  color: #ff7373;
  :hover {
    transform: scale(1.2);
  }
  transition: .2s;
`;

function Algorithm() {

  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Outlet></Outlet>
      <br></br>
      <div className='back'>
        <BackBtn onClick={()=>{ navigate(-1)}}>Back</BackBtn>
      </div>
    </div>
  );
}

export default Algorithm;