import React, { useState }from 'react'
import { LoadingScreen } from '../LoadingScreen';
import Hero from './Components/Hero';
import { NavBar } from './Components/NavBar';

function App (){
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-secondary`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Hero />
      </div>
    </>
  );
}

export default App
