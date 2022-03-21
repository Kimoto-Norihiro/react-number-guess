import './App.css';
import Header from './components/Header';
import Game from './components/Game';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import EnterForm from './components/EnterForm';
import Result from './components/Result';
import Ranking from './components/Ranking';
import 'bootstrap/dist/css/bootstrap.min.css';
import Role from './components/Role';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path = "/" element={<EnterForm/>} />
          <Route path = "/game" element={<Game/>} />
          <Route path = "/result" element={<Result/>} />
          <Route path = "/ranking" element={<Ranking/>} />
          <Route path = '/role' element={<Role/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
