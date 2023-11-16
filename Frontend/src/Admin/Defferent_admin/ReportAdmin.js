import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DataPreAdmin.css";

function ReportAdmin() {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/reportuser"
      );
      setAdmins(response.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to delete the admin by ID
      await axios.delete(`http://localhost:3001/reportuser/delete/${id}`);

      // After successful deletion, fetch the updated list of admins
      fetchAdmins();
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  // Filter admins based on the search term
  const filteredAdmins = admins.filter((admin) => {
    const searchFields = [
      admin.name,
      admin.email,
      admin.phoneNumber,
      admin.password,
      admin.createdAt,
      admin.updatedAt,
    ];

    return searchFields.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2 className="heading">◤✧ 𝕽𝖊𝖕𝖔𝖗𝖙 𝖆𝖉𝖒𝖎𝖓 ✧◥</h2>

      {/* Search Bar */}
      <div className="search-container centered">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-container">
        {filteredAdmins.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>𝐈𝐃</th>
                <th style={{ textAlign: "center" }}>𝐍𝐚𝐦𝐞</th>
                <th style={{ textAlign: "center" }}>𝐄𝐦𝐚𝐢𝐥</th>
                <th style={{ textAlign: "center" }}>𝐏𝐡𝐨𝐧𝐞 𝐍𝐮𝐦𝐛𝐞𝐫</th>
                <th style={{ textAlign: "center" }}>𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</th>
                <th style={{ textAlign: "center" }}>𝐂𝐫𝐞𝐚𝐭𝐞𝐝𝐀𝐭</th>
                <th style={{ textAlign: "center" }}>𝐔𝐩𝐝𝐚𝐭𝐞𝐝𝐀𝐭</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAdmins.map((admin) => (
                <tr key={admin.id}>
                  <td>{admin.id}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.phoneNumber}</td>
                  <td>{admin.password}</td>
                  <td>{admin.createdAt}</td>
                  <td>{admin.updatedAt}</td>
                  <td>
                    <Link to={`/updateReportuser/${admin.id}`}>
                      <button className="btn btn-edit">Update</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(admin.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ReportAdmin;
