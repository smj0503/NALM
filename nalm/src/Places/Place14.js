import { useSelector } from "react-redux";

function Place14(props) {

  let condition = useSelector((state)=> state.condition);

  if (props.list.location === condition.location
    && props.list.drink === condition.drink
    && props.list.price === condition.price
    && props.list.nation === condition.nation
    && props.list.experience === condition.experience
    && props.list.time === condition.time
    && props.list.kor_category === condition.kor_category1
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

export default Place14;