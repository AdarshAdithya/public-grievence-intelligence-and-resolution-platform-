import { useEffect, useState } from "react";

function AdminDashboard(){

  const [complaints,setComplaints] = useState([]);

  useEffect(()=>{

    fetch("http://127.0.0.1:8000/complaints")
    .then(res=>res.json())
    .then(data=>setComplaints(data))

  },[])

  return(

    <div className="card">

      <h2>Admin Dashboard</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {complaints.map((c)=>(
            <tr key={c.complaint_id}>
              <td>{c.complaint_id}</td>
              <td>{c.description}</td>
              <td>{c.latitude}, {c.longitude}</td>
              <td>{c.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

export default AdminDashboard;