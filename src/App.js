/*import logo from './logo.svg';*/
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router";
import HomeComponent from "./tuiter/home";
import Explore from "./tuiter/explore";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index element={<Labs/>}/>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter" element={<HomeComponent/>}/>
                  <Route path="/tuiter/home"    element={<HomeComponent/>}/>
                  <Route path="/tuiter/explore" element={<Explore/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;