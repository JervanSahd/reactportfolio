import React from 'react';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

// Import our list of users from users.js
import projects from './projects';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Nav />
      <Portfolio projects={projects} />
    </div>
  );
}
