import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import AllWorks from './pages/Home/AllWorks/AllWorks/AllWorks';
import Graphics from './pages/Home/Graphics/Graphics';
import Webs from './pages/Home/Webs/Webs';
import Loading from './pages/Shared/Loading/Loading';

function App() {
  return (
    <div className="App">
      {/* <img src="https://ps.w.org/under-construction-page/assets/screenshot-2.png?rev=1840052" width="100%" alt="" /> */}

      <div>
        <Router>
            <Loading></Loading>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />}>
              <Route path={"/home/web"} element={<Webs></Webs>}></Route>
              <Route path={"/home/ui"} element={<Graphics></Graphics>}></Route>
            </Route>
            <Route path="/work" element={<AllWorks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
