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
    <Router basename="/stressmap">
      <div className="App" id="root">
        {userRole === 'admin' && <AdminNavbar />}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home showNavbar={false} showFooter={true} />} />
            <Route path="/map" element={<Map3DComponent showNavbar={true} />} />
            <Route path="/uploaddata" element={<UploadData showNavbar={true} />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login showNavbar={true} setUserRole={setUserRole} />} />
            <Route path="/sign-up" element={<SignUp showNavbar={true} />} />
            <Route path="/reset-password" element={<ResetPassword showNavbar={true} />} />
            <Route path="/download" element={<Download showModal={showModal} handleCloseModal={handleCloseModal} />} />
            <Route path="/profile" element={<ProfileComponent showNavbar={true} />} />
            <Route path="/viewmap" element={<AdminMap />} />
            <Route path="/adminNavbar" element={<AdminNavbar />} />
            <Route path="/viewuser" element={<ViewUser />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/recorddownload" element={<RecordDownload />} />
            <Route path="/activation" element={<Activation />} />
            <Route path="/historyupload" element={<HistoryUploadData />} />
            <Route path="/uploadview" element={<UploadView />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
