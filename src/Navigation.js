import React from "react";
/* Add NavLink to import */
import { NavLink } from "react-router-dom";

/* define the NavBar component */
function Navigation() {
  return (
    <div>
    {/* //mkdo: NavLink is the LINK I'm putting on the page. IF this thing is clicked, it will go TO="/" This renders the button TO GO HOME.  */}
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Home
      </NavLink>
      
      <NavLink
        to="/creations"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Creations
      </NavLink>

      <NavLink
        to="/creations/new"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        New
      </NavLink>

      <NavLink
        to="/creations/new/:id"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        TEH
      </NavLink>
      
    </div>
  );
}

export default Navigation