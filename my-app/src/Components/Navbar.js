import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import AboutUs from './AboutUs'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

      
    const [textSwitch,setText] = useState('DarkMode')
    

    const toggleMode = () => {
        console.log("object")
        if (textSwitch == 'LightMode') {
            setText('DarkMode');
            
        }
        else {
            setText('LightMode'); 
            
        }
    }

    const toggleMode2 = () =>
    {

    }
    return (
    
    <nav className= {`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">{props.link}</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
          &ensp;
          <div className = {`"form-check form-switch text-${props.mode == 'dark' ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox"  onClick={event =>{props.tm(); toggleMode()}} role="switch" id="flexSwitchCheckDefault"/>
            &ensp;
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{textSwitch}</label>
        </div>
        &ensp;
        {/* <div className = {`"form-check form-switch text-${props.mode == 'green' ? 'light' : 'dark'}`}>
            <input className="form-check-input" type="checkbox"  onClick={event =>{props.tm(); props.tm2(); toggleMode()}} role="switch" id="flexSwitchCheckDefault"/>
            &ensp;
            <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{textSwitch}</label>
        </div> */}
        </div>
      </div>
    </nav>
    
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Add title here',
    link: 'Add link here'
  };  
  