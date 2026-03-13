import { useState } from "react";
import ComplaintForm from "./components/ComplaintForm";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {

  const [page, setPage] = useState("citizen");

  return (
    <div className="app">

      <header className="header">
        <h1>Smart Civic Complaint System</h1>
        <p>AI-powered platform for reporting city issues</p>
      </header>

      <div className="nav">

        <button
          className={page === "citizen" ? "active" : ""}
          onClick={() => setPage("citizen")}
        >
          Citizen Portal
        </button>

        <button
          className={page === "admin" ? "active" : ""}
          onClick={() => setPage("admin")}
        >
          Admin Dashboard
        </button>

      </div>

      <div className="container">

        {page === "citizen" && <ComplaintForm />}
        {page === "admin" && <AdminDashboard />}

      </div>

    </div>
  );
}

export default App;