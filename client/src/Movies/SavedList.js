import React from 'react';
import {Link} from 'react-router-dom'; // imported theLink 

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* wraped the div below with a link tag to navigate the home button 
    on the savedlist back to home
     */}
    <Link to="/" >
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
