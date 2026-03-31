import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
        <h2>Yuklanmoqda...</h2>
      </div>
    );
  }

  return (
    <div style={styles.appContainer}>
      <h1>Sayt ochildi 🚀</h1>
      <p>Xush kelibsiz! Saytga kirish tayyor.</p>
    </div>
  );
}

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    color: "#333",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid #ccc",
    borderTop: "6px solid #007BFF",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  },
  appContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#e6f7ff",
    color: "#007BFF",
  },
};

// Global CSS for spinner animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`, styleSheet.cssRules.length);

export default App;