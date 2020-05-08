import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let Products = [{
  category: "Clothes",
  name:"Vest" ,
  price: 250
}, 
{
  category:"Electronics" ,
  name:"Micro onde" ,
  price: 300
}, 
{
  category:"Electronics" ,
  name:"Smart-tv" ,
  price: 900
},
{
  category:"Clothes" ,
  name:"Shoes" ,
  price: 150
}, 
{
  category:"Clothes" ,
  name:"Tshirt" ,
  price: 60
}];
ReactDOM.render(
  <React.StrictMode>
    <App Products={Products} />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
