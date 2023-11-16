import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SuperAdmin.css";
import datapre from "./datapre.png";
import report from "./report.png";
import training from "./training.png";
import testing from "./testing.png";

function SuperAdmin() {
  const [dataPreUserCount, setDataPreUserCount] = useState(null);
  const [reportUserCount, setReportUserCount] = useState(null);
  const [trainingUserCount, setTrainingUserCount] = useState(null);
  const [testingUserCount, setTestingUserCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a 4-second delay before fetching data
        setTimeout(async () => {
          const dataPreResponse = await axios.get("http://localhost:3001/datapreparationuser");
          const reportResponse = await axios.get("http://localhost:3001/reportuser");
          const trainingResponse = await axios.get("http://localhost:3001/traininguser");
          const testingResponse = await axios.get("http://localhost:3001/testinguser");

          setDataPreUserCount(dataPreResponse.data.length);
          setReportUserCount(reportResponse.data.length);
          setTrainingUserCount(trainingResponse.data.length);
          setTestingUserCount(testingResponse.data.length);
          setLoading(false);
        }, 4000); // Delay of 4 seconds
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="heading"> ◤✧ 𝐒𝐮𝐩𝐞𝐫 𝐀𝐝𝐦𝐢𝐧 ✧◥</h2>
      <div className="MainCards">
        <div className="card">
          <img id="datapre" src={datapre} alt="" />
          <h2>𝕯𝖆𝖙𝖆 𝖕𝖗𝖊𝖕𝖆𝖗𝖆𝖙𝖎𝖔𝖓 𝖆𝖉𝖒𝖎𝖓</h2>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <p>{dataPreUserCount}</p>
          )}<h6><b>Data Preperation User</b></h6>
        </div>
        
        <div className="card">
          <img id="report" className="admin_img" src={report} alt="" />
          <h2>𝕽𝖊𝖕𝖔𝖗𝖙 𝖆𝖉𝖒𝖎𝖓</h2>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <p>{reportUserCount}</p>
          )}<h6><b>Report User</b></h6>
        </div>
        <div className="card">
          <img id="training" src={training} alt="" />
          <h2>𝕿𝖗𝖆𝖎𝖓𝖎𝖓𝖌 𝖆𝖉𝖒𝖎𝖓</h2>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <p>{trainingUserCount}</p>
          )}<h6><b>Training User</b></h6>
        </div>
        
        <div className="card">
          <img id="testing" src={testing} alt="" />
          <h2>𝕿𝖊𝖘𝖙𝖎𝖓𝖌 𝕬𝖉𝖒𝖎𝖓</h2>
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <p>{testingUserCount}</p>
          )}<h6><b>Testing User</b></h6>
        </div>
        
      </div>
    </div>
  );
}

export default SuperAdmin;
