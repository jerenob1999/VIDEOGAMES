import "./App.css";
import { Route } from "react-router-dom";
import {Home,Landing,Form,Detail} from "./views"
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar/>}
      <Route exact path="/" render={()  => <Landing />} />
      <Route path="/home" render={() => <Home/> } />
      <Route exact path="/form" render={() => <Form/>} />
      <Route exact path="/detail/:id" render={() => <Detail/>} />
    </div>
  );
}

export default App;
