import React from 'react';
import Header from './Header';
import Scheduler from './Scheduler';
import EnergyUsageList from './EnergyUsageList';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Scheduler />
        <EnergyUsageList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
