import React from 'react';

// statless functional components
// implicit return, only valit if no real functional stuff no {}
const Header = (props) =>
  (
    <React.Fragment>
      <header className='top'>
        <h1>Filix
        <span className='ofThe'>
          <span className='of'>of</span>
          <span className='the'>the</span>
        </span>
      Fish</h1>
        <h3 className='tagline'>
        <span>{props.tagline}</span>
        </h3>
      </header>
    </React.Fragment>
  )

export default Header;
