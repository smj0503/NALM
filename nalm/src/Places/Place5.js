import { useSelector } from "react-redux";

function Place5(props) {

  let condition = useSelector((state)=> state.condition);

  if (props.list.location === condition.location
    && props.list.drink === condition.drink
    && props.list.nation === condition.nation
    && props.list.price === condition.price
    && props.list.experience === condition.experience
    && props.list.drink_category === condition.drink_category
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

export default Place5;