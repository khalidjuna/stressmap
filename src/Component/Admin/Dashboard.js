// Dashboard.js
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer
} from 'recharts';
import Layout from './LayoutAd';

// Example data for charts
const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
  { name: 'Jun', value: 239 },
  { name: 'Jul', value: 349 },
  { name: 'Aug', value: 400 },
  { name: 'Sep', value: 300 },
  { name: 'Oct', value: 250 },
  { name: 'Nov', value: 320 },
  { name: 'Dec', value: 210 },
];

const pieData = [
  { name: 'Work', value: 400 },
  { name: 'Personal', value: 300 },
  { name: 'Health', value: 300 },
];

const barData = [
  { name: 'Jan', users: 40 },
  { name: 'Feb', users: 30 },
  { name: 'Mar', users: 20 },
  { name: 'Apr', users: 27 },
  { name: 'May', users: 18 },
  { name: 'Jun', users: 23 },
  { name: 'Jul', users: 34 },
  { name: 'Aug', users: 40 },
  { name: 'Sep', users: 30 },
  { name: 'Oct', users: 25 },
  { name: 'Nov', users: 32 },
  { name: 'Dec', users: 21 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const styles = {
  dashboardContainer: {
    padding: '20px',
    background: '#f4f7f6',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginLeft: '250px',
  },
  headerButtonHover: {
    background: '#0056b3',
  },
  overview: {
    display: 'flex',
    justifyContent: 'flex-end', 
    gap: '10px',  
    marginBottom: '20px',
    flexWrap: 'wrap',  
  },
  card: {
    background: '#fff',
    padding: '10px',
    margin: '10px 0',  
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    flex: '1 0 200px',  
    textAlign: 'center',
    transition: 'transform 0.3s',
    maxWidth: '320px',
  },
  cardHover: {
    transform: 'translateY(-5px)',
  },
  cardTitle: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '8px',
  },
  cardValue: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  charts: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '20px',
    flexWrap: 'wrap',
    marginRight: '20px',
  },
  chartRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
    flexWrap: 'wrap',
    marginLeft: '480px',
  },
  chartContainer: {
    flex: '1',
    padding: '10px',
    marginBottom: '20px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '450px',
  },
  chartTitle: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
  },
};

const Dashboard = () => {
  return (
    <div style={styles.dashboardContainer}>
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>Admin Dashboard</h2>
      </div>

      <div style={styles.overview}>
        <div
          style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
        >
          <h3 style={styles.cardTitle}>Total Users</h3>
          <p style={styles.cardValue}>150</p>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
        >
          <h3 style={styles.cardTitle}>Active Reports</h3>
          <p style={styles.cardValue}>75</p>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
        >
          <h3 style={styles.cardTitle}>Resolved Issues</h3>
          <p style={styles.cardValue}>50</p>
        </div>
      </div>

      <div style={styles.charts}>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Monthly User Signups</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Stress Levels in Java</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={styles.chartRow}>
        <div style={styles.chartContainer}>
          <h3 style={styles.chartTitle}>Stress Categories Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    <Layout/>
  </div>
  );
};

export default Dashboard;
