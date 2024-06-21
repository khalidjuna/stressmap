import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from './Layout';

const UploadData = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [uploadFinished, setUploadFinished] = useState(false); 
  const navigate = useNavigate();

  const handleFilesUpload = (event) => {
    const selectedFiles = Array.from(event.target.files).filter(file => file.type === "text/csv");
    setFiles([...files, ...selectedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files).filter(file => file.type === "text/csv");
    setFiles([...files, ...droppedFiles]);
  };

  const startUpload = () => {
    setUploading(true);
    const progress = {};

    files.forEach((file) => {
      progress[file.name] = 0;
      const interval = setInterval(() => {
        if (progress[file.name] >= 100) {
          clearInterval(interval);
          setUploadFinished(true);
        } else {
          progress[file.name] += 10;
          setUploadProgress({ ...progress });
        }
      }, 500);
    });
  };

  const handleNext = () => {
    if (!uploadFinished) { 
      startUpload();
      setSubmitted(true); 
    } else {
      navigate('/map');
    }
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };
  
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      position: 'relative', 
      marginRight: '40px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    historyIcon: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      fontSize: '24px',
      color: '#007bff',
      cursor: 'pointer', 
    },
    card: {
      marginBottom: '20px',
      border: 'none',
      fontFamily: "Playfair Display, serif",
      fontWeight: "400",
    },
    cardHeader: {
      backgroundColor: '#fff', 
      border: 'none', 
    },
    cardBody: {
      borderTop: '1px solid #ccc',
      padding: '20px',
    },
    uploadDropZone: {
      position: 'relative',
      maxWidth: '700px',
      border: '2px dashed #007bff',
      borderRadius: '5px',
      padding: '40px',
      textAlign: 'center',
      cursor: 'pointer',
      marginBottom: '20px',
    },
    listGroupItem: {
      position: 'relative',
    },
    progress: {
      marginTop: '10px',
    },
    cancelButton: {
      marginRight: '10px',
    },
    icon: {
      fontSize: '48px',
      color: '#007bff',
    },
    fileLabel: {
      display: 'block',
      marginTop: '10px',
    },
    footer: {
      marginTop: '10px',
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div className="container" style={styles.container}>
        <i className="bi bi-clock-history" style={styles.historyIcon} onClick={handleHistoryClick}></i>
        <Layout />
        <div className="card" style={styles.card}>
          <div className="card-header" style={styles.cardHeader}>
            <h5 className="card-title">Upload Data</h5>
          </div>
          <div className="card-body" style={styles.cardBody}>
            <div
              className="upload-drop-zone"
              style={styles.uploadDropZone}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <i className="bi bi-folder-symlink" style={styles.icon}></i>
              <p>Drag your file(s) to start uploading</p>
              <p>OR</p>
              <label className="btn btn-primary">
                Browse files
                <input type="file" multiple accept=".csv" onChange={handleFilesUpload} style={{ display: 'none' }} />
              </label>
            </div>
            <p className="text-muted">Only support .csv format</p>
            <ul className="list-group">
              {files.map((file, index) => (
                <li key={index} className="list-group-item" style={styles.listGroupItem}>
                  {file.name} - {file.size} bytes
                  {uploading && (
                    <div className="progress" style={styles.progress}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${uploadProgress[file.name]}%` }}
                      >
                        {uploadProgress[file.name]}%
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-footer d-flex justify-content-end" style={styles.footer}>
            <button className="btn btn-secondary" onClick={() => setFiles([])} style={styles.cancelButton}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleNext} disabled={files.length === 0}>
              {submitted ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadData;
