import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function Navbar(props) {
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect,isAuthenticated } = useAuth0()
  const { logout } = useAuth0()

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="\">
          {props.tittle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* button for darkmode enable  */}

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            

            <li className="nav-item dropdown m-2">
              <div className="form-check form-switch ">
                <input
                  className="form-check-input "
                  onClick={props.togglefunc}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label text-${props.mode2}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {(props.mode2).slice(0,1).toUpperCase()}{(props.mode2).slice(1,).toLowerCase()} Mode </label>
              </div>
            </li>
            {isAuthenticated ? (
              <li>
                <button
                  className={`btn btn-primary  border-${props.mode2} text-small text-${props.mode2}  bg-${props.mode}`}
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => loginWithRedirect()}
                  className={`btn btn-primary border-dark text-small text-${props.mode2} bg-${props.mode} mx-1`}
                >
                  Log In
                </button>
              </li>
            )}
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes = {
  tittle: PropTypes.string,
}
Navbar.defaultProps = {
  tittle: 'Set tittle here',
}
