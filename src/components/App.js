
import React from "react";
import { NavLink, BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function NavBar() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/movies">
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/directors">
                Directors
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/actors">
                Actors
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
      </div>
    </BrowserRouter>
  );
}

export default NavBar;






