import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  

function App() {
    return (
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

function Header() {
  //const style = { color: 'red', fontSize: '100px', textTransform: 'uppercase' };
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {numPizzas > 0 && (
        <ul className='pizzas'>
          {pizzas.map(pizza => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function GetPizzaList({pizzas}) {
  return (
    <div>
      {pizzas.map((pizza, index) => (
        <Pizza 
        name = {pizza.name}
        ingredients = {pizza.ingredients}
        price = {pizza.price}
        photoName = {pizza.photoName}
        soldOut = {pizza.soldOut}/>
      ))}
    </div>
  )
}

function Pizza(props) {
  return (
      <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
          <div>
            <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
          </div>
      </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;


  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!"); else
  //   alert("Sorry we're closed");

  // return React.createElement('footer', null, "We're currently open!"); 
  return <footer className='footer'>
    {isOpen && (
      <div className='order'>
        <p>We're open util {closeHour}:00. Come visit us or order online.</p>
        <button className='btn'>Order</button>
      </div>
    )}
  </footer>
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//React before