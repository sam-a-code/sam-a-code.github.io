import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Resume from './Resume'
import CodingPortfolio from './CodingPortfolio';
import ArtPortfolio from './ArtPortfolio';
import Footer from './Footer'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="" element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="coding-portfolio" element={<CodingPortfolio />} />
          <Route path="art-portfolio" element={<ArtPortfolio />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
