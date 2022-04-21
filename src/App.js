import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import NavBar from './NavBar';
import Login from './Login'
import Contact from './Contact'
import About from './About'
import Pricing from './Pricing'
import FooterR from './FooterR'
function App() {
  const [mode, setMode] = useState(1);
  const modeChange = (e) => {
    setMode(e);
  }

  const getComponent=(index) =>{
    switch (index) {
      // case 1:
      //   return <Container/>
      case 2:
        return <Login/>
      case 3:
        return <Contact/>
      case 4:
        return <About/>
      case 5:
        return <Pricing/>

      default:
        break;
    }
  }

  return (
    <>
      <NavBar modeChange={modeChange}></NavBar>
      <Sidebar/>
      {/* <Profile/> */}
      {getComponent(mode)}
      <FooterR></FooterR>
    </>
  );
}

export default App;
