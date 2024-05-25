// app/javascript/components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    axios.get('/analytics').then((response) => {
      setAnalytics(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Search Analytics</h2>
      <ul>
        {analytics.map((item, index) => (
          <li key={index}>
            {item.query}: {item.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
