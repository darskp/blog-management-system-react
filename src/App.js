import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Pagenotfound from './components/404page';
import Aboutus from './components/aboutus';
import AdminLogin from './components/adminlogin';
import Adminnavbar from './components/adminnavbar';
import AdminHome from './components/adminportal';
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/Navbar';
import Readblog from './components/Readblog';
function App() {
  let url = useLocation();
  let urlpart = url.pathname.split('/')[1];
  const acceptedPaths = ["admin"];
  return (
    <div className="App">
      {(acceptedPaths.includes(urlpart)) ? <Adminnavbar /> : <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/*' element={<AdminHome />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/blog/:id' element={<Readblog />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
// bootstrap
// logical programming
// 1 sm
// 2 q 1 pin


// to
// upload project
// percentage
// reactjs
