import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./NavBar";
import Chatbot from "./Components/Chatbot2";
//import Chatbot from "react-chatbot-kit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="SidePlusContent">
          <Sidebar />
          <Switch>
            <Route exact path="/chat">
              <div className="ChatBackground">
                <Chatbot />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
