import React from 'react';
import Read from '../redux_egoing/Read';
import Control from '../redux_egoing/Control';
import Header from '../redux_egoing/Header';
import Nav from '../redux_egoing/Nav';
import { useSelector } from 'react-redux';
import Create from '../redux_egoing/Create';
import Update from '../redux_egoing/Update';

const Layout3 = () => {
  let { mode } = useSelector((store) => store);
  console.log(mode);
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Control></Control>
      {mode === 'READ' ? (
        <Read></Read>
      ) : mode === 'CREATE' ? (
        <Create></Create>
      ) : mode === 'UPDATE' ? (
        <Update></Update>
      ) : (
        <Read></Read>
      )}
    </>
  );
};

export default Layout3;
