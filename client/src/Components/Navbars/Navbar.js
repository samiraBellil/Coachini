import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from '../Foter/Footer';

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav class="nav-wrapper orange darken-2">

                    <div className="container">
                    <a href="#" class="brand-logo">Logo</a>
                        <ul class="right ">
                            <li><NavLink to ="/" >Accueil</NavLink></li>
                            <li><NavLink to ="/Coachs">Coachs</NavLink></li>
                            <li><NavLink to ="/Activités">Activités</NavLink></li>
                            <li><NavLink to ="/Blog">Blog</NavLink></li>
                            <li><NavLink to ="/Boutique">La Boutique</NavLink></li>
                        </ul>
                    </div>
                </nav>

                {/* <h1>Coachini</h1>
                <li><a href="/">Accueil</a></li>
                 <Link to='/'> Accueil</Link> 
                <Link to='/Coachs'> Coachs</Link>
                <Link to='/Activités'> Activités</Link>
                <Link to='/Blog'> Blog</Link>
                <Link to='/Boutique'> La Boutique </Link>
                <Link to='/Connexion'> Connexion</Link> */}
                
                


            </div>
            
        );
        
    }
}

export default Navbar;