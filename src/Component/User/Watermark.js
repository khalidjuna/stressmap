import React from 'react';

const styles = {
  watermark: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    borderRadius: '5px'
  },
  watermarkText: {
    color: 'rgba(0, 0, 0, 10)'
  }
};

const Watermark = ({ isLoggedIn }) => {
  return (
    <div style={styles.watermark}>
      {!isLoggedIn && (
        <div style={styles.watermarkText}>
          Watermark: You must log in first
        </div>
      )}
    </div>
  );
};

export default Watermark;
