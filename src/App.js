import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./NavBar";
import Chatbot from "./Chatbot/Chatbot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/chat">
            <Chatbot />
          </Route>
        </Switch>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
