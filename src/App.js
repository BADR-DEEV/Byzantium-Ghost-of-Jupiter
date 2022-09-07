
import React from 'react';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import NavigationBar from './components/NavigationBar';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
  <>

    <Router>
      <NavigationBar />
      </Router>  
  <HomeScreen />
  <Footer/>

  </>
  );
};

export default App;