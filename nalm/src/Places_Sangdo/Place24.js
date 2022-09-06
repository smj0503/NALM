import { useSelector } from "react-redux";

function Place24(props) {

  let condition = useSelector((state)=> state.condition);

  if (props.list.location === condition.location
    && props.list.drink === condition.drink
    && props.list.nation === condition.nation
    && props.list.price === condition.price
    && props.list.experience === condition.experience
    && props.list.time === condition.time
    && props.list.amount === condition.amount
    && props.list.mood === condition.mood
    && props.list.ingredients === condition.ingredients
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

export default Place24;