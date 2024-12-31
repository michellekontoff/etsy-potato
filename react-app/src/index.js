import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { ModalProvider } from './context/Modal';
import configureStore from './store';


// creates the shopping-cart state with localstorage and finds all the items inside cart else returns undefined
const loadState = () => {
  try {
    const cart = localStorage.getItem('cart')
    if (cart === null) {
      return undefined
    }
    return JSON.parse(cart)
  }
  catch (err) {
    return undefined
  }
}

// preloads the entire application state with the shoppingcart
const state = { shoppingCart: loadState()};

const store = configureStore(state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
