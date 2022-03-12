import React from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
       <Link to ="/" className="navbar-brand ml-5">React redux Contact App </Link>
      
       </nav> 
  );
};

export default Navbar;
