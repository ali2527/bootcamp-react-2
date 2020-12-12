import "./App.css";
import { toggleDarkMode } from "halfmoon";


function App() {
  return (
    <div className="App m-10 p-10">
          <div className="card w-400 mw-full m-auto position-relative">
        <div className="position-absolute top-0 right-0 z-10 p-10">
          <button className="btn" onClick={toggleDarkMode}>
            {" "}
            &#127769;
          </button>
        </div><br></br>
        <h1 className="card-title mr-auto">login</h1>

        <form >
          <div className="form-group">
            <label htmlFor="full-name" className="required">
              Username / Email
            </label>
            <input
              type="text"
              id="full-name"
              className="form-control"
              placeholder="Your full name"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession" className="required">
              password
            </label>
            <input
              type="password"
              id="profession"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <input
            className="btn btn-primary btn-block"
            type="submit"
          />
          
        </form>
      </div>
    </div>
  );
}

export default App;
