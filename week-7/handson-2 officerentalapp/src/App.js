import React from 'react';

function App() {
  const office1 = {
    name: 'Office Space 1',
    rent: 45000,
    address: 'Banjara Hills, Hyderabad',
    image: 'https://picsum.photos/id/77/450/300',
  };

  const office2 = {
    name: 'Office Space 2',
    rent: 75000,
    address: 'MG Road, Bengaluru',
    image: 'https://picsum.photos/id/122/3888/2592',
  };

  const office3 = {
    name: 'Office Space 3',
    rent: 60000,
    address: 'Cyber City, Gurugram',
    image: 'https://picsum.photos/seed/office3/400/250',
  };

  const offices = [office1, office2, office3];

  return (
    <div>
      <h1>Office Space Rental App</h1>

      {offices.map((office, index) => (
        <div key={index}>
          <img src={office.image} alt={office.name} width="400" height="250" />
          <h2>{office.name}</h2>
          <p>
            <strong style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              Rent: ₹{office.rent}
            </strong>
          </p>
          <p>
            <strong>Address:</strong> {office.address}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
