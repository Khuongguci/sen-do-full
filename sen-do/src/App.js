import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { React } from 'react';
import Header from './components/Header';
import MainProduct from './components/mainProduct/MainProduct';
import Footer from './components/footer/Footer';
function App() {

  const getData = async (url) => {
    try {
      const res = await fetch(`http://localhost:3000/${url}`)
      const data = await res.json()

      return data
    } catch (error) {
    }
  }
  useEffect(() => {
    getData("tasks")
    getData("shops")
  }, [])
  return (
    <div className="App">
      <Header />
      <div className=''>
        <MainProduct />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
