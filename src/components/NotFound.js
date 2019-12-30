
import React from 'react';

//element to be displayed if there search results are === 0
const NotFound = () => {
  return(
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
}


export default NotFound;