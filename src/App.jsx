import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import SenimanPage from "./pages/SenimanPage";
import PekerjaanPage from "./pages/PekerjaanPage";
import AsetPage from "./pages/AsetPage";
import InspirasiPage from "./pages/InspirasiPage";


function App() {
  return (
  <div>
    <NavbarComponent />
    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/seniman" Component={SenimanPage}/>
      <Route path="/pekerjaan" Component={PekerjaanPage}/>
      <Route path="/inspirasi" Component={InspirasiPage}/>
      <Route path="/aset" Component={AsetPage}/>
    </Routes>

    <FooterComponent />
    
  </div>
  );
}

export default App;
