import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <img src="https://ps.w.org/under-construction-page/assets/screenshot-2.png?rev=1840052" width="100%" alt="" /> */}

      <div>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
