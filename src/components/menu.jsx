import { pizzaData } from "../../public/data";
import { Pizza } from "./pizza";
export const Menu = () => {
  //   const pizzas = pizzaData.map((pizza) => ({
  //     name: pizza.name,
  //     ingredients: pizza.ingredients,
  //     price: pizza.price,
  //     photourl: pizza.photoName,
  //     soldout: pizza.soldOut,
  //   }));
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaObj={pizza}
            key={pizza.name}
          /> /**pass the pizza object */
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Spinacci"
        ingredients="Tomato, mozarelo, spinach, and riocotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </div>
  );
};
