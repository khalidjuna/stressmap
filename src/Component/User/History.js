import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from './Layout';

const History = () => {
  const [history, setHistory] = useState([
    { name: 'file1.csv', data: 'data1' },
    { name: 'file2.csv', data: 'data2' },
    { name: 'file3.csv', data: 'data3' },
  ]);

  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    // localStorage.setItem('interpolatedFiles', JSON.stringify(updatedHistory)); // Uncomment this line to use real data
  };

  const handleReinterpolate = (fileData) => {
    console.log("Re-interpolating:", fileData);
    // Simulasi pengiriman data ke server
    setTimeout(() => {
      console.log("Data re-interpolated successfully");
      navigate('/stressmap/map');
    }, 1000);
  };

  const styles = {
    outerContainer: {
      backgroundColor: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
    },
    searchContainer: {
      position: 'relative', 
      padding: '20px',
      display: 'flex',
      justifyContent: 'flex-end', 
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      width: '100%', 
      boxSizing: 'border-box',
      fontFamily: "Playfair Display, serif", 
    },
    searchInput: {
      width: '200px', 
      marginRight: '10px',
      padding: '5px 10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    historyText: {
      position: 'absolute', 
      left: '20px',
      fontSize: '25px', 
      fontWeight: 'bold', 
      margin: 0,
      marginLeft: '300px',
      fontFamily: "Playfair Display, serif",
    },
    container: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      width: '100%',
      maxWidth: '900px',
      minHeight: '70vh',
      marginBottom: '60px',
      margin: '0 10px', 
      marginLeft: '250px',
      justifyContent: 'flex-end', 
    },
    listGroup: {
      padding: '20px',
    },
    listGroupItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 15px',
      borderRadius: '4px',
      marginBottom: '10px',
      backgroundColor: '#fff',
      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
      fontFamily: "Poppins, serif",
    },
    button: {
      marginRight: '8px',
    },
    span: {
      maxWidth: '60%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  };
  
  
  return (
    <div style={styles.outerContainer}>
      <div style={styles.searchContainer}>
        <input type="text" placeholder="Search..." style={styles.searchInput} />
        <button className="btn btn-primary">Search</button>
        <div style={styles.historyText}>History</div>
      </div>
      <Layout />
      <div style={styles.container}>
        <ul className="list-group mt-3" style={styles.listGroup}>
          {history.map((file, index) => (
            <li key={index} className="list-group-item" style={styles.listGroupItem}>
              <span style={styles.span}>{file.name}</span>
              <div>
                <button 
                  className="btn btn-danger me-2" 
                  style={styles.button}
                  onClick={() => handleDelete(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
                <button 
                  className="btn btn-primary" 
                  style={styles.button}
                  onClick={() => handleReinterpolate(file.data)}
                >
                  <i className="bi bi-arrow-repeat"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );  
};  
export default History;
