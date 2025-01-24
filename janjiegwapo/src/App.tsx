import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS
import bgImage from './assets/bg.png'; // Adjust the path as needed
import kani1 from './assets/kani1.png'; // Adjust the path as needed
import kani2 from './assets/kani2.png'; // Adjust the path as needed
import kani3 from './assets/kani3.png'; // Adjust the path as needed
import profilePic1 from './assets/9.jpg'; // Adjust the path as needed
import profilePic2 from './assets/8.jpg'; // Adjust the path as needed
import LoginRegister from './LoginRegister'; // Import the new component
import Pricing from './Pricing'; // Import the new Pricing component
import InventoryManagement from './InventoryManagement'; // Import the new Inventory Management component
import { AuthProvider, useAuth } from './AuthContext'; // Import AuthContext

const LandingPage: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { loggedInUser, logout } = useAuth();

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

  return (
    <Router>
      <div className="landing-page">
        <div className="container">
          {/* Header Section */}
          <header className="header">
            <div className="logo">UIS</div>
            <nav className={`nav ${showSearch ? 'hide-links' : ''}`}>
              {loggedInUser && (
                <div className="user-menu">
                  <span onClick={toggleDropdown} className="username">{loggedInUser}</span>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </div>
                  )}
                </div>
              )}
              <Link to="/">Home</Link>
              <Link to="/">Contact</Link>
              <Link to="/">About</Link>
              {!loggedInUser && (
                <Link to="/login-register">
                  <i className="fas fa-user"></i> {/* FontAwesome user icon */}
                </Link>
              )}
              <div className="search-icon-container">
                {!showSearch && <i className="fas fa-search" onClick={toggleSearch}></i>}
                <div className={`search-form ${showSearch ? 'show' : ''}`}>
                  <input type="text" placeholder="Search..." />
                  <i className="fas fa-search" onClick={toggleSearch}></i>
                </div>
              </div>
              <i className="fas fa-bars" onClick={toggleSidebar}></i>
            </nav>
          </header>

          <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            {loggedInUser && <span className="username">{loggedInUser}</span>}
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">About</Link>
            <Link to="/">Services</Link>
            <Link to="/">Blog</Link>
            {loggedInUser ? (
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            ) : (
              <Link to="/login-register">Login/Register</Link>
            )}
          </div>

          <Routes>
            <Route path="/" element={
              <>
                {/* Main Content */}
                <main className="main-content">
                  <div className="text-content">
                    <h1>MANAGE AND KEEP TRACK OF YOUR INVENTORY</h1>
                    <p>
                      Effectively organizing and monitoring stock levels to ensure smooth
                      operations and meet business demands.
                    </p>
                    <div className="buttons">
                      <button className="order-btn pink">Subscribe</button>
                      <Link to="/pricing" className="order-btn dark">View Pricing</Link>
                    </div>
                  </div>
                  <div className="image-content">
                    <img
                      src={bgImage} alt="Image" className="Illustration"
                      style={{ width: '525px', height: 'auto' }}
                    />
                  </div>
                </main>

                {/* Scrollable Image Section */}
                <div className="scrollable-images">
                  <div className="scroll-image-row">
                    <div className="scroll-image-container">
                      <img src={kani1} alt="Image 1" className="scroll-image" />
                      <div className="scroll-image-text">
                        <h2>MANAGE INVENTORY</h2>
                        <p>Streamline the organization, tracking, and control of stock to ensure efficient operations, avoid shortages or excess, and meet business needs effectively.</p>
                        <Link to="/inventory-management" className="view-btn">View</Link>
                      </div>
                    </div>
                    <div className="scroll-image-container center">
                      <img src={kani2} alt="Image 2" className="scroll-image" />
                      <div className="scroll-image-text">
                        <h2>REPORT AND ANALYSIS</h2>
                        <p>Generate and evaluate data insights to track performance, identify trends, and support informed decision-making for business growth.</p>
                        <button className="view-btn">View</button>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-image-container right">
                    <img src={kani3} alt="Image 3" className="scroll-image right" />
                    <div className="scroll-image-text">
                      <h2>TRACKING PRODUCT</h2>
                      <p>Monitor the movement and status of products throughout their lifecycle to ensure accurate records, optimize operations, and meet customer demands.</p>
                      <button className="view-btn">View</button>
                    </div>
                  </div>
                </div>

                {/* New Shape Section */}
                <div className="new-shape-section">
                  <div className="new-shape">
                    <h2 className="shape-text">OWNERSHIP</h2>
                    <p className="sub-text">THE FOUNDER AND CO-FOUNDER<br/>OF UNIVERSAL INVENTORY<br/>SYSTEM</p>
                    <div className="profile-pictures">
                      <div className="profile-picture">
                        <div className="profile-img-container">
                          <img src={profilePic1} alt="Profile 1" className="profile-img" />
                        </div>
                        <p className="profile-name">Jason Nieva</p>
                        <p className="profile-title">Founder of Credo Tech</p>
                      </div>
                      <div className="profile-picture">
                        <div className="profile-img-container">
                          <img src={profilePic2} alt="Profile 2" className="profile-img" />
                        </div>
                        <p className="profile-name">Cleo Credo</p>
                        <p className="profile-title">Co-Founder of Credo Tech</p>
                      </div>
                    </div>
                    <h3 className="ready-text">ARE YOU READY</h3>
                    <Link to="/login-register" className="get-started-btn">GET STARTED</Link>
                    <p>New here? Create an account!!</p>
                  </div>
                </div>

                {/* Footer Section */}
                <footer className="footer">
                  <div className="footer-content">
                    <div className="footer-column">
                      <h3>Contacts</h3>
                      <a href="https://www.facebook.com/janjie02123" className="facebook">
                        Facebook
                      </a>
                      <a href="https://x.com/JanJie51" className="twitter">
                        Twitter
                      </a>
                      <a href="https://www.instagram.com/j33jan/" className="instagram">
                        Instagram
                      </a>
                    </div>
                    <div className="footer-column">
                      <h3>Offers</h3>
                      <a href="#">Yearly</a>
                      <a href="#">Annually</a>
                      <a href="#">Monthly</a>
                    </div>
                    <div className="footer-column">
                      <h3>UIS</h3>
                      <a href="#">Home</a>
                      <a href="#">About</a>
                      <a href="#">Inquire</a>
                    </div>
                    <div className="newsletter-section">
                      <p className="newsletter-text">Join our Newsletter</p>
                      <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="email-input" />
                        <button type="submit" className="submit-btn">Submit</button>
                      </form>
                    </div>
                  </div>
                  <p className="footer-text">© 2023 Your Company. All rights reserved.</p>
                </footer>
              </>
            } />
            <Route path="/login-register" element={<PageWithTransition><LoginRegister /></PageWithTransition>} />
            <Route path="/pricing" element={<PageWithTransition><Pricing /></PageWithTransition>} />
            <Route path="/inventory-management" element={<PageWithTransition><InventoryManagement /></PageWithTransition>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const PageWithTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page"
        timeout={300}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <LandingPage />
    </AuthProvider>
  );
};

export default App;