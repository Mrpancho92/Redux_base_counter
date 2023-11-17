import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore /* bindActionCreators */ } from 'redux';
import reducer from './reducer';
// import * as actions from  './actions';  /* import {inc, dec, rnd} from './actions'; */
import App from './components/App';
import { Provider } from 'react-redux';



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const {dispatch, subscribe, getState} = store; 
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    {/* <Counter 
    counter={getState().value} 
    inc={inc} 
    dec={dec} 
    rnd={() => {
      const value = Math.floor(Math.random() * 10);
      rnd(value);
    }} />*/}
    <Provider store={store}>
        <App/>
    </Provider>
    </React.StrictMode>
  ); 

  // update();
  // subscribe(update);

  // const bindActionCreator = (creator, dispatch) => (...args) => {
  //   dispatch(creator(...args));
  // }

  // const {inc, dec, rnd} = bindActionCreators(actions
  //   // incDispatch: inc,
  //   // decDispatch: dec,
  //   // rndDispatch: rnd
  // , dispatch);
  // const decDispatch = bindActionCreators(dec, dispatch);
  // const rndDispatch = bindActionCreators(rnd, dispatch);
  
  // document.getElementById('inc').addEventListener('click', inc);
  // document.getElementById('dec').addEventListener('click', dec);
  // document.getElementById('rnd').addEventListener('click', () => {
  //   const value = Math.floor(Math.random() * 10);
  //   rnd(value);
  // });
// let state = reducer(initialState, {type: 'INC'})
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);
