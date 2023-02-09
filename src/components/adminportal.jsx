import Pagenotfound from './404page';
import Crud from './crud';
import Home from './home';
import {Routes, Route } from 'react-router-dom';
import Adminnavbar from './adminnavbar';

const AdminHome = () => {
    return (
        <div className="adminhome">
            {/* <Adminnavbar/> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addblog' element={<Crud />} />
                <Route path='/editblog/:id' element={<Crud />}/>
                <Route path='/*' element={<Pagenotfound/>} />
            </Routes>
        </div>
    );
}

export default AdminHome;