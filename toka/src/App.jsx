import React, { useState }from 'react'
import {BrowersRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import { LoadingScreen } from '../LoadingScreen';
import Hero from './Components/Hero';

function App (){
  const [isLoaded, setIsLoaded] = useState(false)
  return(
    <>
      {!isLoaded && <LoadingScreen  onComplete={() =>setIsLoaded(true)}/>}
      <BrowserRouter>
        <Layout />  
      </BrowserRouter>
    </>

  )
}

export default App
