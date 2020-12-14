import "./App.css";
import Login from "./login";
import Bar from "./bar";
import Pie from "./pie";
import Navbar from "./navbar";
import Info from './infopanel'

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Info/>
      <br />
      <br />
      <br />
      
      <Login />
    </div>
  );
}

export default App;
