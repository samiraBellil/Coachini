import React from 'react'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom';
import './ComponentStyle.css';
// import ModalInscrire from '../modal/modalUser/ModalInscrire'
// import MoodalIdentifier from '../modal/modalUser/MoodalIdentifier'

class FullPageIntroWithNonFixedTransparentNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return (
            <header>

                <Router>
                    <MDBNavbar dark expand="md">
                        <MDBContainer>

                            <div>
                                <MDBNavbarBrand href="/">
                                    <h6>Coachi-INI</h6>
                                </MDBNavbarBrand>
                            </div>

                            <div>
                                <MDBNavbarToggler onClick={this.onClick} />
                                <MDBCollapse isOpen={this.state.collapse} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem >
                                            <MDBNavLink to="#"><strong>Coachs sportifs</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><strong>Spécialités</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><strong>Objectifs</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><strong>La boutique</strong></MDBNavLink>
                                        </MDBNavItem> <MDBNavItem>
                                            <MDBNavLink to="#"><strong>Blog</strong></MDBNavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBNavLink to="#"><strong>Connexion</strong></MDBNavLink>
                                        </MDBNavItem>

                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </div>

                        </MDBContainer>
                    </MDBNavbar>
                </Router>

            </header>

        );
    }
}

export default FullPageIntroWithNonFixedTransparentNavbar;



// class Navbar extends React.Component {
//     render() {
//         return (
//             <header>
//                 <div className='menu'>
//                     <div className='bar'></div>
//                 </div>
//                 <div className='overlay'></div>
//                 <nav> <a href='#' className='brand'> Coacht-INI</a> 
//                 <ul>
//                     <li className='nav-item'> <a href='#' className='nav-link'>Coachs sportifs </a> </li>
//                     <li className='nav-item'> <a href='#' className='nav-link'>Spécialités </a> </li>
//                     <li className='nav-item'> <a href='#' className='nav-link'>Objectifs </a> </li>
//                     <li className='nav-item'> <a href='#' className='nav-link'> La boutique </a> </li>
//                     <li className='nav-item'> <a href='#' className='nav-link'>Blog </a> </li>
//                     <li className='nav-item'> <a href='#' className='nav-link'>Connexion </a> </li>

//                 </ul>
//                 </nav>
//             </header>

//         )
//     }
// }

// export default Navbar