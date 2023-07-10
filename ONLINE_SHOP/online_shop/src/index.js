import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const defaultState={
    products:[
      {
        name:"Apple Iphone 14",
        color:"black",
        image:"https://stylus.ua/thumbs/138x138/15/3a/2498981.jpeg",
        price:599,
        inCart:1,
        id:1,
      },
      {
        name:"Apple Iphone 14",
        color:"product red",
        image:"https://stylus.ua/thumbs/138x138/0a/2a/2531793.jpeg",
        price:699,
        inCart:1,
        id:2,
      },
      {
        name:"Apple Iphone 13",
        color:"pink ",
        image:"https://stylus.ua/thumbs/138x138/51/19/2080470.png",
        price:699,
        inCart:1,
        id:3,
      },
      {
        name:"Apple MacBook Air M1 13",
        color:"Space gray",
        image:"https://stylus.ua/thumbs/138x138/b8/eb/1920922.jpeg",
        price:999,
        inCart:1,
        id:4,
      },
      {
        name:"Apple MacBook Pro 13 M2",
        color:"Space gray",
        image:"https://stylus.ua/thumbs/138x138/c3/0e/2389411.jpeg",
        price:1499,
        inCart:1,
        id:5,
      },
    ],
    cartProducts:[],
}




const reducer=(state = defaultState,action)=>{
  switch(action.type){
      case "ADD_TO_CART":
        return{...state,cartProducts:[...state.cartProducts,action.payload]}
    default:
      return state
  }
}

const  store=createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


