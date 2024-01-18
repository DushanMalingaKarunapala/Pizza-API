// import { pizzaData } from "../../public/data";

export const Pizza = (props) => {
  const { name, photoName, ingredients, price, soldOut } = props;

  console.log(props);

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
};
