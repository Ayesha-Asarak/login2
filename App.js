import React from 'react';
import './App.css'; // Optional, you can create this file for additional styling

function App() {
  return (
    <div style={{
      position: 'relative', // Ensure the container is relatively positioned
      background: 'linear-gradient(135deg, #9D0191, #FD3A69)',
      minHeight: '100vh',
    }}>
      <div style={{
        position: 'absolute',
        top: '50%', // Center vertically
        right: '1%', // Adjust the distance from the right side as needed
        transform: 'translateY(-50%)', // Center vertically
        width: '45.77%',
        height: '94.65%',
        
        backgroundColor: '#FFF4FE',
        borderRadius: '10px', // Optional: Add some rounded corners
      }}> <div className="custom-box">
      {/* Content for the custom box */}
      <p style={{ fontWeight: 'bold', fontSize:'25px',textAlign:'center'}}>Create Account</p>
      <div className="rectangle-container">
      <button className="rectangle"> <p style={{color:"gray"}} >Sign up with Google</p></button>
        <button className="rectangle"><p style={{color:"gray"}} >Sign up with Facebook</p></button>

      </div>
      <p style={{color:"gray",textAlign:'center'}} >OR</p>

    </div>

        
      </div>
      <div class="left-side-text"> 
    <p>"Unlock Your</p>
    <p>Creativity: Seamlessly</p>
    <p>Access Your Digital</p>
    <p>Canvas with Builder's</p>
    <p>Intuitive Login</p>
    <p>Experience!"</p>
</div>
    </div>
  );
}

export default App;
