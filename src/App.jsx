// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserProvider, useUser } from "./lib/context/user";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Explore from "./components/Explore";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/footer"; // 🔼 ensure capital F matches filename
import Rates from "./components/LiveRatesEmbed";
import AdminUpload from "./lib/context/AdminUpload";  // ⬅️ import admin upload

// 🔒 PrivateRoute Component to protect pages
function PrivateRoute({ children }) {
  const { current, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator until user is fetched
  }

  if (!current) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <UserProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // full viewport height
        }}
      >
        <Router>
          <Navbar />
          {/* main content expands to push footer down */}
          <main style={{ flex: "1" }}>
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/contact" element={<Contact />} />

              {/* Protected routes */}
              <Route
                path="/gallery"
                element={
                  <PrivateRoute>
                    <Gallery />
                  </PrivateRoute>
                }
              />
              <Route
                path="/rates"
                element={
                  <PrivateRoute>
                    <Rates />
                  </PrivateRoute>
                }
              />
              <Route
                path="/adminupload" // ⬅️ new admin page
                element={
                  <PrivateRoute>
                    <AdminUpload />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer /> {/* ✅ Always sticks at bottom */}
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
