import React from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from './context';

const Nav = () => {
  return (
    <Consumer>
      { context => {
        // run performsearch when a link is clicked
        let handleSearch = (e) => {
          context.performSearch(e.target.innerText);
          context.loading = true; // is set to true so that the text "loanding" appears
          console.log(context.loading);
        };

        return(
          <nav className="main-nav">
            <ul>
              <li>{/*the "to" sends the :query value to <gallery> to display the text in the title*/}
              <NavLink to="/search/waterfalls" onClick={handleSearch}>Waterfalls</NavLink>
              </li>
              <li>
              <NavLink to="/search/puppies" onClick={handleSearch}>Puppies</NavLink>
              </li>
              <li>
              <NavLink to="/search/sunsets" onClick={handleSearch}>Sunsets</NavLink>
              </li>
            </ul>
          </nav>
        );
      }}
    </Consumer>
  );
}

export default Nav;