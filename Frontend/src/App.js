import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Contributer from "./Components/Contributer";
import User from "./Components/User";
import AdminLogin from "./Admin/Admin_login";
import DashBoard from "./Dashboard/Dashboard";
import CreateUser from './CreateUser/CreateUser';
import CreateAdmin from './CreateUser/CreateAdmin';
import DataPreUpdate from "./Update/DataPreUsersUpdate";
import UpdateReportUser from "./Update/UpdateReportUser";
import UpdateTestingUser from "./Update/UpdateTestingUser";
import UpdateTrainingUser from "./Update/UpdateTrainingUer";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contributer" element={<Contributer />} />
        <Route path="/user" element={<User />} />
        <Route path="/signin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/user" element={<User />} />
        <Route path="/createuser" element={<CreateUser/>}/>
        <Route path="/createadmin" element={<CreateAdmin/>}/>
        <Route path="/updateDataPreUser/:id" element={<DataPreUpdate/>}/>
        <Route path="/updateReportUser/:id" element={<UpdateReportUser/>}/>
        <Route path="/updateTestingUser/:id" element={<UpdateTestingUser/>}/>
        <Route path="/updateTrainingUser/:id" element={<UpdateTrainingUser/>}/>


      </Routes>
    </>
  );
} 

export default App;
