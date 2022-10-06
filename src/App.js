import Hero from "./Pages/Hero";
import Learn from "./Pages/Learn";
import Navbar from "./Pages/Navbar"
import { Transform } from "./Pages/Transform";
function App() {
  return (
    <div className="App">
     <Navbar/> 
     <Hero/>
     <Learn/>
     <Transform/>
    </div>
  );
}

export default App;
