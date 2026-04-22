import React, { useEffect, useState } from "react";

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const fetchSubscribers = async () => {
    try {
      const res = await fetch(`${API_URL}/api/subscribers`);
      const data = await res.json();
      setSubscribers(data);
    } catch (err) {
      console.error("Failed to fetch subscribers", err);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    window.open(`${API_URL}/api/subscribers/export/csv`, "_blank");
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Newsletter Subscribers</h2>

      <button
        onClick={downloadCSV}
        style={{
          padding: "10px 16px",
          background: "#3d3d3d",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        Download CSV
      </button>

      {loading ? (
        <p>Loading subscribers...</p>
      ) : subscribers.length === 0 ? (
        <p>No subscribers found.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: "8px",
            overflow: "hidden"
          }}
        >
          <thead>
            <tr style={{ background: "#f4f1eb" }}>
              <th style={th}>Email</th>
              <th style={th}>Date Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub, index) => (
              <tr
                key={index}
                style={{
                  background: index % 2 === 0 ? "#fff" : "#fafafa"
                }}
              >
                <td style={td}>{sub.email}</td>
                <td style={td}>
                  {new Date(sub.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const th = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd2c4",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};
