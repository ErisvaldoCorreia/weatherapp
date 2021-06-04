import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './pages/HomeScreen';

const App = () => {
  return (
    <>
       <StatusBar barStyle='light-content' />
      <HomeScreen />
    </>
  );
}

export default App;
