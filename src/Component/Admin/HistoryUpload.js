import React, { useState } from 'react';
import Layout from './LayoutAd';

const styles = {
  container: {
    maxWidth: '100%',
    padding: '20px',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    fontFamily: 'Playfair Display, serif',
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Playfair Display, serif',
    fontSize: '24px',
    marginBottom: '0px', 
    marginTop: '-40px',
    marginRight: '510px',
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  table: {
    width: '100%',
    maxWidth: '1100px',
    marginLeft: '250px',
    borderCollapse: 'collapse',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  tableHead: {
    backgroundColor: '#f2f2f2',
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  statusCompleted: {
    backgroundColor: '#28a745',
    color: '#ffffff',
    borderRadius: '12px',
    padding: '4px 8px',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  statusFailed: {
    backgroundColor: '#dc3545',
    color: '#ffffff',
    borderRadius: '12px',
    padding: '4px 8px',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  searchContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '0px',
    fontFamily: 'Playfair Display, serif',
  },
  searchInput: {
    padding: '8px',
    width: '30%',
    borderRadius: '3px',
    border: '1px solid #ddd',
    marginRight: '10px',
    fontSize: '14px',
  },
  searchButton: {
    padding: '8px 12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed':
      return styles.statusCompleted;
    case 'Failed':
      return styles.statusFailed;
    default:
      return {};
  }
};

const HistoryUploadData = () => {
  const [uploadHistory, setUploadHistory] = useState([
    { id: 1, name: 'Data 1', date: '2022-06-01', username: 'user1', status: 'Completed' },
    { id: 2, name: 'Data 2', date: '2022-06-03', username: 'user2', status: 'Failed' },
    { id: 3, name: 'Data 3', date: '2022-06-05', username: 'user3', status: 'Completed' },
    { id: 4, name: 'Data 4', date: '2022-06-07', username: 'user4', status: 'Completed' },
    { id: 5, name: 'Data 5', date: '2022-06-09', username: 'user5', status: 'Completed' },
    { id: 6, name: 'Data 6', date: '2022-06-11', username: 'user6', status: 'Completed' },
    { id: 7, name: 'Data 7', date: '2022-06-13', username: 'user7', status: 'Completed' },
    { id: 8, name: 'Data 8', date: '2022-06-15', username: 'user8', status: 'Completed' },
    { id: 9, name: 'Data 9', date: '2022-06-17', username: 'user9', status: 'Completed' },
    { id: 10, name: 'Data 10', date: '2022-06-19', username: 'user10', status: 'Completed' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const filteredData = uploadHistory.filter((data) =>
      data.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setUploadHistory(filteredData);
  };

  return (
    <div style={styles.container}>
      <Layout />
      <h2 style={styles.header}>History Upload Data</h2>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.searchButton}>Search</button>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableCell}>Username</th>
              <th style={styles.tableCell}>File Name</th>
              <th style={styles.tableCell}>Date</th>
              <th style={styles.tableCell}>Status</th>
            </tr>
          </thead>
          <tbody>
            {uploadHistory.map((data, index) => (
              <tr key={data.id} style={index % 2 === 0 ? styles.evenRow : {}}>
                <td style={styles.tableCell}>{data.username}</td>
                <td style={styles.tableCell}>{data.name}</td>
                <td style={styles.tableCell}>{data.date}</td>
                <td style={{ ...styles.tableCell, ...getStatusClass(data.status) }}>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryUploadData;
