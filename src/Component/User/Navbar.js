import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  

  const handleItemClick = (path) => {
    if (path === selectedItem) {
      setSelectedItem(null); 
      navigate("/stressmap/map"); 
    } else {
      setSelectedItem(path);
      navigate(path);
    }
  };
  

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img style={styles.logoImage} src="logo.png" alt="Logo" />
      </div>
      <h1 style={styles.stressMap}>Stress Map</h1>
      <ul style={styles.navLinks}>
        {menuItems.map((item) => (
          <li
            key={item.path}
            style={
              selectedItem === item.path || hoveredItem === item.path
                ? { ...styles.navItem, ...styles.hoverItem }
                : styles.navItem
            }
            onClick={() => handleItemClick(item.path)}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <i className={item.icon} style={styles.icon}></i>
            <span style={styles.linkText}>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const menuItems = [
  { path: "/stressmap", label: "Home", icon: "bi bi-house-door-fill" },
  { path: "/stressmap/profile", label: "User", icon: "bi bi-person-fill" },
  {
    path: "/stressmap/uploaddata",
    label: "Upload Data",
    icon: "bi bi-cloud-arrow-down-fill",
  },
];

const zIndex = 1;
const styles = {
  navbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "250px",
    backgroundColor: "#fff",
    padding: "20px",
    color: "#333",
    fontFamily: "Poppins, serif",
    fontSize: "700",
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    zIndex: zIndex,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    marginBottom: "20px",
    marginLeft: "50px",
  },
  logoImage: {
    width: "100px",
    height: "auto",
  },
  stressMap: {
    margin: "5px 0 20px 55px",
    fontSize: "18px",
    fontFamily: "Poppins, serif",
    fontWeight: "400",
    cursor: "pointer",
  },
  navLinks: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    width: "100%",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "20px",
  },
  linkText: {
    marginLeft: "10px",
  },
  icon: {
    fontSize: "20px",
    minWidth: "20px",
  },
  hoverItem: {
    backgroundColor: "#f0f0f0",
  },
};

export default Navbar;
