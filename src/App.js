import "./App.css";
import React  from 'react'
import  {useState} from 'react'
import Navbar from "./navbar";
import FootNav from "./footNav"
import InfoPanel from './infopanel'

function App() {
  const screenConfig = useState(0);
  return (
    <div className="App ">
      <Navbar />
      <InfoPanel currentScreen={screenConfig[0]}/>
      <FootNav screenConfig={screenConfig}/>
      <br />
      <br />
      <br />
      
    
    </div>
  );
}

export default App;
