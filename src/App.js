/*import logo from './logo.svg';*/
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router";
import HomeComponent from "./tuiter/home";
import Explore from "./tuiter/explore";
import ProfileComponent from "./tuiter/profile";
import EditProfileComponent from "./tuiter/edit-profile";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" element={<HelloWorld/>}/>
                  <Route path="/tuiter" element={<HomeComponent/>}/>
                  <Route path="/tuiter/home"    element={<HomeComponent/>}/>
                  <Route path="/tuiter/explore" element={<Explore/>}/>
                  <Route path="/tuiter/profile" element={<ProfileComponent/>}/>
                  <Route path="/tuiter/edit-profile" element={<EditProfileComponent/>}/>
                  {/*<Route path="/*" element={<Labs/>}/>*/}
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;