// import React from "react";
export const Footer = () => {
  //   return React.createElement("footer", null, "We are currently open"); //this is how regular react manipulate the dom

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  //   if (hour >= openHour && hour <= closeHour) alert("We are open") else
  //   alert('we are closed');
  const isOpen = hour >= openHour && hour <= closeHour;
  //       ? alert("we are open")
  //       : alert("we are closed");

  return (
    <div>
      <footer className="footer">
        {isOpen /**short circuting to render the below jsx if is open is true */ && (
          <div className="order">
            <p>We are open until {closeHour}.00</p>

            {new Date().toLocaleTimeString()}
            <button className="btn">Order</button>
          </div>
        )}
      </footer>
    </div>
  );
};
