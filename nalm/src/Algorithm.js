import './App.css';
import { Outlet, useNavigate } from "react-router-dom";

function Algorithm() {

  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Outlet></Outlet>
      <br></br>
      <div className='back'>
        <a onClick={()=>{ navigate(-1)}}>Back</a>
      </div>
    </div>
  );
}

export default Algorithm;