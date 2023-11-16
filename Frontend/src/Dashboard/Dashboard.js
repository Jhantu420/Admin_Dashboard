import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Assets/Sidebar/sidebar";

import DataPreAdmin from "../Admin/Defferent_admin/DataPreAdmin";
import ReportAdmin from "../Admin/Defferent_admin/ReportAdmin";
import TrainingAdmin from "../Admin/Defferent_admin/TrainingAdmin";
import TestingAdmin from "../Admin/Defferent_admin/TestingAdmin";
import SuperAdmin from "../Admin/Defferent_admin/SuperAdmin";

const Dashboard = () => {
  const location = useLocation();
  const subrole = location.state ? location.state.subrole : null;
  let content;
  if (subrole === "datapre") {
    content = <DataPreAdmin />;
  } else if (subrole === "training") {
    content = <TrainingAdmin />;
  } else if (subrole === "testing") {
    content = <TestingAdmin />;
  } else if (subrole === "report") {
    content = <ReportAdmin />;
  } else if (subrole === "super") {
    content = <SuperAdmin />;
  } else {


  }
  return (
    <div className="mainapp">
      <div className="AppGlass">
        <div>
          <Sidebar />
        </div>
        <div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
