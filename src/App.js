import Navbar from './Components/Navbar';
import Routes from './Config/Route';
import { GlobalProvider } from "./Config/GlobalStats"

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        
        <Routes>
          <Navbar />
        </Routes>

      </div>
    </GlobalProvider>
  );
}

export default App;
