import React, { useState } from 'react';
import Layout from './LayoutAd';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: '#333',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3A6EBB',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  buttonHover: {
    backgroundColor: '#3A6EBB',
  },
  statusMessage: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#d9534f',
  },
  successMessage: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#3A6EBB',
  },
};

const Activation = () => {
  const [username, setUsername] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleActivation = (e) => {
    e.preventDefault();
    // Logika aktivasi akun oleh admin, misalnya mengirim data ke server
    // Asumsikan respons dari server disimpan di variabel response
    const response = { success: true }; // Simulasi respons server
    if (response.success) {
      setIsSuccess(true);
      setStatusMessage(`Account for ${username} successfully activated!`);
    } else {
      setIsSuccess(false);
      setStatusMessage(`Failed to activate account for ${username}. Try again.`);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleActivation}>
        <h2 style={styles.heading}>User Account Activation</h2>
        <label style={styles.label} htmlFor="username">User Username</label>
        <input
          style={styles.input}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Aktivasi
        </button>
      </form>
      {statusMessage && (
        <p
          style={isSuccess ? styles.successMessage : styles.statusMessage}
        >
          {statusMessage}
        </p>
      )}
      <Layout/>
    </div>
  );
};

export default Activation;
