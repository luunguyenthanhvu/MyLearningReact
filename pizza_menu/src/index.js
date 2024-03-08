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
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      {/* <GetPizzaList pizzas={pizzaData} /> */}
      <ul className='pizzas'>
        {pizzaData.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
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
        <span>{props.pizzaObj.pric}</span>
          </div>
      </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;


  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!"); else
  //   alert("Sorry we're closed");

  // return React.createElement('footer', null, "We're currently open!"); 
  return <footer className='footer'>{new Date().toLocaleTimeString()} We're currently open!</footer>
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//React before