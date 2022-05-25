import React from 'react';

// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function Portfolio({ projects }) {
  return (
    <div className="container">
      <h1>Portfolio:</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((projects) => (
          <li className="list-group-item" key={projects.login.uuid} >
            {/* {`${projects.title.first} ${projects.name.last}`} */}
            {`${projects.name.title}`}
            <div>
              <p><img src={`${projects.picture.large}`} alt={`${projects.picture.alt}`}></img></p>
              <p>GitHub Repository {`${projects.links.github}`}</p>
               <p>Deployed Site {`${projects.links.deployed}`}</p>

            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
