import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Homepage/Home';
import Map3DComponent from './Component/User/Map';
import UploadData from './Component/User/UploadData';
import History from './Component/User/History';
import Login from './Component/Homepage/Registrasi/Login';
import Download from './Component/User/Download';
import ProfileComponent from './Component/User/Profile';
import AdminMap from './Component/Admin/AdminMap';
import AddUser from './Component/Admin/AddUser';
import AdminNavbar from './Component/Admin/AdminNavbar';
import Activation from './Component/Admin/Activation';
import RecordDownload from './Component/Admin/Record';
import ViewUser from './Component/Admin/ViewUser';
import HistoryUploadData from './Component/Admin/HistoryUpload';
import RegisterUser from './Component/Admin/Register/RegisterUser';
import UploadView from './Component/Admin/ViewUpload';
import SignUp from './Component/Homepage/Registrasi/SignUp';
import ResetPassword from './Component/Homepage/Registrasi/ResetPassword';
import Dashboard from './Component/Admin/Dashboard';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userRole, setUserRole] = useState(null); 

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    // <Router basename="/stressmap">
      <Router>
      <div className="App" id="root">
        {userRole === 'admin' && <AdminNavbar />}
        <div className="content">
          <Routes>
            <Route path="/stressmap" element={<Home showNavbar={false} showFooter={true} />} />
            <Route path="/stressmap/map" element={<Map3DComponent showNavbar={true} />} />
            <Route path="/stressmap/uploaddata" element={<UploadData showNavbar={true} />} />
            <Route path="/stressmap/history" element={<History />} />
            <Route path="/stressmap/login" element={<Login showNavbar={true} setUserRole={setUserRole} />} />
            <Route path="/stressmap/sign-up" element={<SignUp showNavbar={true} />} />
            <Route path="/stressmap/reset-password" element={<ResetPassword showNavbar={true} />} />
            <Route path="/stressmap/download" element={<Download showModal={showModal} handleCloseModal={handleCloseModal} />} />
            <Route path="/stressmap/profile" element={<ProfileComponent showNavbar={true} />} />
            <Route path="/stressmap/viewmap" element={<AdminMap />} />
            <Route path="/stressmap/adminNavbar" element={<AdminNavbar />} />
            <Route path="/stressmap/viewuser" element={<ViewUser />} />
            <Route path="/stressmap/adduser" element={<AddUser />} />
            <Route path="/stressmap/recorddownload" element={<RecordDownload />} />
            <Route path="/stressmap/activation" element={<Activation />} />
            <Route path="/stressmap/historyupload" element={<HistoryUploadData />} />
            <Route path="/stressmap/uploadview" element={<UploadView />} />
            <Route path="/stressmap/register" element={<RegisterUser />} />
            <Route path="/stressmap/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
