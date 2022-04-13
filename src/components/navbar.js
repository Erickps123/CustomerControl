import React from 'react';
import '../components/resources/navbar.css'
import { Link } from 'react-router-dom';


class Navbar extends React.Component{
    render() {
        return <div className="navMenu">
                    <ul>
                        <li><Link to="/view">Customers</Link></li>
                        <li><Link to="/create">Add Customer</Link></li>
                    </ul>
                </div>;
           
    }
}

export default Navbar;