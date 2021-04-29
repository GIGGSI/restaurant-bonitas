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
import Footer from './components/Footer/Footer';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';



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
      <Route path="/menu" component={Menu} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
    <Footer />
  </>;
}

export default App;
