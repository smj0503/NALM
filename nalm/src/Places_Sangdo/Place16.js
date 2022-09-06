import { useSelector } from "react-redux";

function Place16(props) {

  let condition = useSelector((state)=> state.condition);

  if (props.list.location === condition.location
    && props.list.drink === condition.drink
    && props.list.nation === condition.nation
    && props.list.price === condition.price
    && props.list.group === condition.group
    && props.list.meat === condition.meat 
    ){
    return (
      <div>
        <p>{props.list.name}</p>
        <br/>
      </div>
    );
  }
  return null;
}

export default Place16;