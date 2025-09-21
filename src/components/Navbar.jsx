import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';
import { useUser } from '../lib/context/user';

const Navbar = () => {
  const { current, logout } = useUser();

  const linkStyle = {
    textDecoration: 'none',
    color: '#bfa760',
    fontWeight: '500',
    transition: 'color 0.3s',
  };

  return (
    <nav style={{ padding: '15px 30px', backgroundColor: 'rgba(6, 76, 17, 1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logo} alt="KS Jewellers Logo" style={{ height: '50px', objectFit: 'contain' }} />
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#bfa760', letterSpacing: '1px', fontFamily: 'Georgia, serif' }}>KS Jewellers</span>
      </div>

      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/about" style={linkStyle}>About</Link></li>
        <li><Link to="/explore" style={linkStyle}>Explore</Link></li>
        <li><Link to="/gallery" style={linkStyle}>Gallery</Link></li>
        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li><Link to="/rates" style={linkStyle}>Live Rates</Link></li>

        {current ? (
          <>
            <li><span style={{ color: '#bfa760' }}>User: {current.email.split('@')[0]}</span></li>

            {/* Only show Admin Upload link for your admin account */}
            {current.email === 'gaurav.swarnkar85@gmail.com' && (
              <li><Link to="/adminupload" style={linkStyle}>Admin Upload</Link></li>
            )}

            <li><button onClick={logout} style={{color:'#bfa760'}}>Logout</button></li>
          </>
        ) : (
          <li><Link to="/login" style={linkStyle}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
