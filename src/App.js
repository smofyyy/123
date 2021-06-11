import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import MainProfile from "./Components/MainProfile/MainProfile";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={MainProfile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <footer className="footer">
          <a href="*">some</a>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
