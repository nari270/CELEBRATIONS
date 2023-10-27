import React, { useState, useEffect } from 'react';
import './App.css';
import MenuScreen from './screens/MenuScreen';
import ReservationScreen from './screens/ReservationScreen';
import Home from './screens/Home';
import { fetchMenuItems } from './services/api';
import { updateMenuTemplate } from './services/templateUpdater';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('home');

  useEffect(() => {
    // Fetch menu items from the server when the component mounts
    async function fetchMenu() {
      try {
        const data = await fetchMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
      }
    }

    fetchMenu();
  }, []);

  const handleScreenChange = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CELEBRATIONS Restaurant</h1>
      </header>
      {currentScreen === 'home' && <Home onScreenChange={handleScreenChange} />}
      {currentScreen === 'menu' && <MenuScreen menuItems={menuItems} onScreenChange={handleScreenChange} />}
      {currentScreen === 'reservation' && <ReservationScreen onScreenChange={handleScreenChange} />}
    </div>
  );
}

export default App;
