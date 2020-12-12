
import './App.css';
import Button from '@material-ui/core/Button';
import { toggleDarkMode } from "halfmoon"

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <button className="btn m-10" onClick={toggleDarkMode}> &#127769;</button>

      <Button variant="contained" color="primary" >
      Hello World
    </Button>
      
    </div>
  );
}

export default App;
