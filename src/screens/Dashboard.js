
import React from 'react';
import Footer from '../components/Footer';
import HomeScreen from './HomeScreen';
import NavigationBar from '../components/NavigationBar';
import { Routes, Route } from "react-router-dom";



  const Dashboard = () => {
  return (
    <>
    <NavigationBar />

 <HomeScreen/>
    <Footer />
   
    


  

  </>
  )
}
export default Dashboard;