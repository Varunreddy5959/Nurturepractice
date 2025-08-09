import React from 'react';

const CourseDetails = () => (
  <div>
    <h2>Course Details</h2>
    <h3>Angular</h3>
    <p>4/5/2021</p>
    <h3>React</h3>
    <p>6/3/20201</p>
  </div>
);

const BookDetails = () => (
  <div>
    <h2>Book Details</h2>
    <h3>Master React</h3>
    <p>670</p>
    <h3>Deep Dive into Angular 11</h3>
    <p>800</p>
    <h3>Mongo Essentials</h3>
    <p>450</p>
  </div>
);

const BlogDetails = () => (
  <div>
    <h2>Blog Details</h2>
    <h3>React Learning</h3>
    <p><strong>Stephen Biz</strong></p>
    <p>Welcome to learning React!</p>
    <h3>Installation</h3>
    <p><strong>Schwezdenier</strong></p>
    <p>You can install React from npm.</p>
  </div>
);

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      marginTop: '40px',
      fontFamily: 'Arial',
      padding: '20px'
    }}>
      <div style={columnStyle}>
        <CourseDetails />
      </div>

      <div style={{ ...columnStyle, borderLeft: '4px solid green', borderRight: '4px solid green' }}>
        <BookDetails />
      </div>

      <div style={columnStyle}>
        <BlogDetails />
      </div>
    </div>
  );
}

const columnStyle = {
  width: '30%',
  textAlign: 'left'
};

export default App;
