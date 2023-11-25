import React from "react";
import propTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div className="sticky-top">
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} shadow p-3 mb-5`}>
        <div className="container-fluid">
          <a className="navbar-brand">{props.logoName}</a>
          <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
            <input
              className="form-check-input bg-success"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" 
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode === 'dark'?'Disable Dark Mode':'Enable Dark Mode'}
            </label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="reset">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logoName: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  logoName: "kusaljirel",
};

export default Navbar;
