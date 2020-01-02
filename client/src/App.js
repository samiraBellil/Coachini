import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Sport from './components/Sport'
import About from './components/About'
import Nutrition from './components/Nutrition'
import Lifestyle from './components/Lifestyle'
import {Switch , BrowserRouter , Route} from 'react-router-dom'


function App() {
  return (
    
    
 <BrowserRouter>
     <Navbar/>
    <div className="container">
       <Switch>
      < Route exact path="/"component={About} />
       < Route exact path="/Sport"component={Sport}/>
    < Route exact path="/Nutrition"component={Nutrition}/>
    < Route exact path="/Lifestyle"component={Lifestyle}/>
     
       </Switch>
     </div>
     </BrowserRouter>
  );
}

export default App;
