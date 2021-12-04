import React from 'react'

import './App.css';
import About from './components/About/About';
import CustomerReview from './components/customerReview/CustomerReview';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import PlantsCategory from './components/PlantsCatgory/PlantsCategory';


function App() {

  //none responsive
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <PlantsCategory />
      <CustomerReview />
      <Footer />
    </div>
  );
}

export default App;
