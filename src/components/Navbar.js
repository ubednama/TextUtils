import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <p className="navbar-brand">{props.title}</p>
          <div className="form-check form-switch ">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked onClick={props.toggleMode}/>
          </div>
        </div>
    </nav>
  )
}


// this will set data type for props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,         // will give error if not provided
    aboutText: PropTypes.string
}


// setting default value for props
Navbar.defaultProps = {
    // title: 'Set title here',
    aboutText: 'About text here'
}