import React, { useState } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar'
import Dropdown from './components/Dropdown/Dropdown'


import ScrollToTheTop from './SrollToTheTop'
import GLobalStyle from './GlobalStyles';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return <>
    <GLobalStyle />
    <ScrollToTheTop />

    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>;
}

export default App;
