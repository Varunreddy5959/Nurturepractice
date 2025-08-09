import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'Arial' }}>
      <h1>Ticket Booking App</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <div style={{ marginTop: '30px' }}>
        <h2>Flight Details</h2>
        <ul style={{ listStyle: 'none' }}>
          <li>✈️ Flight A – 9:00 AM</li>
          <li>✈️ Flight B – 12:30 PM</li>
          <li>✈️ Flight C – 6:45 PM</li>
        </ul>
      </div>

      <div style={{ marginTop: '40px' }}>
        {isLoggedIn ? (
          <>
            <h2>User Page</h2>
            <p>You are logged in. You can now book tickets.</p>
          </>
        ) : (
          <>
            <h2>Guest Page</h2>
            <p>Please login to book your flight tickets.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
