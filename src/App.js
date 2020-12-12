
import './App.css';
import { toggleDarkMode } from "halfmoon"

function App() {
  return (
    <div className="App m-10 p-10">

      <h1>Dark Mode Switch</h1>

      <div class="custom-switch">
       <input type="checkbox" id="switch-1" value="" onClick={toggleDarkMode}/>
       <label for="switch-1">Dark Mode </label>
      </div>
      
    </div>
  );
}

export default App;
