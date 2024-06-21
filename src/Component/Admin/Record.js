import React, { useState, useEffect } from 'react';
import Layout from './LayoutAd';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  container: {
    maxWidth: '100%',
    padding: '20px',
    zIndex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    fontFamily: 'Playfair Display, serif',
    position: 'relative',
  },
  header: {
    textAlign: 'left',
    fontFamily: 'Playfair Display, serif',
    fontSize: '24px',
    marginBottom: '10px',
    marginLeft: '250px',
    position: 'absolute',
    top: '20px',
  },
  statsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '30%',
    marginLeft: '550px',
  },
  icon: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#007bff',
    marginLeft: '30px',
  },
  statNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '5px',
    marginLeft: '40px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
  },
  separator: {
    width: '1px',
    height: '50px',
    backgroundColor: '#ccc',
    margin: '10px',
  },
  tableContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '80px',
  },
  table: {
    width: '100%',
    maxWidth: '900px',
    marginRight: '-250px',
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
    color: '#28a745',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  statusFailed: {
    color: '#dc3545',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '40px',
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

const StatsBlock = ({ totalDownloads, successfulDownloads }) => (
  <div style={styles.statsContainer}>
    <div>
      <i className="bi bi-download" style={styles.icon}></i>
      <div style={styles.statNumber}>{totalDownloads}</div>
      <div style={styles.statLabel}>Total Downloads</div>
    </div>
    <div style={styles.separator}></div>
    <div>
      <i className="bi bi-check-circle" style={styles.icon}></i>
      <div style={styles.statNumber}>{successfulDownloads}</div>
      <div style={styles.statLabel}>Successful Downloads</div>
    </div>
  </div>
);

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => (
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
);

const RecordDownload = () => {
  const [downloads, setDownloads] = useState([
    { id: 1, username: 'John Doe', fileName: 'data1.csv', date: '2024-06-01 12:34', status: 'Completed' },
    { id: 2, username: 'Jane Smith', fileName: 'data2.csv', date: '2024-06-02 08:22', status: 'Failed' },
    { id: 3, username: 'Alice Johnson', fileName: 'data3.csv', date: '2024-06-03 14:12', status: 'Completed' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalDownloads, setTotalDownloads] = useState(0);
  const [successfulDownloads, setSuccessfulDownloads] = useState(0);

  const handleSearch = () => {
    const filteredData = downloads.filter((download) =>
      download.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      download.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDownloads(filteredData);
  };

  useEffect(() => {
    // Menghitung ulang total unduhan dan unduhan berhasil berdasarkan data unduhan
    setTotalDownloads(downloads.length);
    const successfulCount = downloads.reduce((count, download) => count + (download.status === 'Completed' ? 1 : 0), 0);
    setSuccessfulDownloads(successfulCount);
  }, [downloads]);

  return (
    <div style={styles.container}>
      <Layout />
      <h2 style={styles.header}>Record Downloads</h2>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <StatsBlock totalDownloads={totalDownloads} successfulDownloads={successfulDownloads} />
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
            {downloads.map((download, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.evenRow : {}}>
                <td style={styles.tableCell}>{download.username}</td>
                <td style={styles.tableCell}>{download.fileName}</td>
                <td style={styles.tableCell}>{download.date}</td>
                <td style={{ ...styles.tableCell, ...getStatusClass(download.status) }}>{download.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
            
export default RecordDownload;
            