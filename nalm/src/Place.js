import { useSelector } from "react-redux";

function Place(props) {

  let condition = useSelector((state)=> state.condition);

  if (props.list.location === condition.location
    && props.list.drink === condition.drink
    && props.list.nation === condition.nation
    && props.list.price === condition.price
    && props.list.experience === condition.experience
    && props.list.time === condition.time
    && props.list.amount === condition.amount
    && props.list.drink_category === condition.drink_category
    && props.list.mood === condition.mood
    && props.list.group === condition.group
    && props.list.ingredients === condition.ingredients
    && props.list.kor_category1 === condition.kor_category1
    && props.list.kor_category2 === condition.kor_category2
    && props.list.meat === condition.meat ){
    return (
      <div>
        <p>{props.list.name}</p>
      </div>
    );
  }
  return null;
}

export default Place;