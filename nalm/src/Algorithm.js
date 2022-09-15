import './App.css';
import { Outlet } from "react-router-dom";

function Algorithm() {
  
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default Algorithm;