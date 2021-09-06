import React from 'react';
import { NavBar } from './components/NavBar';
import { Map } from './components/Map';
import { Contacts } from './components/Contacts';
import { From } from './components/Form';

function App() {
  return (
    <>
      <NavBar/>
      <Map/>
      <Contacts/>
      <From/>
    </>
  );
}

export default App;
