import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer); // 스토어 생성

console.log(store.getState())  

// provider의 역할은 스토어를 복사해서 children 컴포넌트에 넣는 것
export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Timer></Timer>
      </Provider>
    );
  }
}