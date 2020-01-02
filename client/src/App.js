import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbars/Navbar';
import Accueil from './Components/Homes/Accueil';
import CoachsList from './Components/Coach/CoachsList';
import Activités from './Components/Activits/Activités';
import Blog from './Components/Blogs/Blog';
import Boutique from './Components/Boutiques/ Boutique';
//import CoachCard from './Components/Coach/CoachCard';
//import Connexion from './Components/Connex/Connexion';
// import Footer from './Components/Foter/Footer';
import Description from './Components/Coach/Description';






function App() {
  return (
    <BrowserRouter>
        <Navbar />
        {/* <Footer/> */}


        <div className="container">
        <Switch>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/Coachs" component={CoachsList} />
        <Route path="/Description/:id" component={Description} />
        <Route exact path="/Activités" component={Activités} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Boutique" component={Boutique} />
        {/*<Route exact path="/Connexion" component={Connexion} />*/}
        </Switch>
        </div>
      
    </BrowserRouter>

  );
}

export default App;
