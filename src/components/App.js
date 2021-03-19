import React, {useState} from 'react';
//scroll helper
import ScrollToTop from "./ui/ScrollToTop";
//components
import Navbar from "./ui/header";
import Footer from "./ui/footer";
import LandingPage from "./LandingPage";
import Artists from "./Artists";
import About from "./About";
import Contact from "./Contact";

// for routing
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Import our theme
import {ThemeProvider} from "@material-ui/styles";
import Theme from './ui/Theme';
import YungBullPage from './ui/YungBull';
import BanxPage from './ui/Banx';
import Brand from './Brand';



function App() {
  /** We need to add our hooks for navigation in the top parent component
   *  to pass down as props to our footer and NavBar
   * */ 

  // hook for handling tab value change
  const [value, setValue] = useState(0); 
  const [selectedIndex, setSelectedIndex] = useState(0);

  

  return (
    <ThemeProvider theme={Theme} >
      <BrowserRouter>
       <ScrollToTop>
        <Navbar
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(props) => 
              <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
            } 
          />
          <Route 
            exact 
            path="/artist" 
            render={(props) => 
              <Artists {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
            }
          />
          <Route 
            exact 
            path="/ajb-yungbull" 
            render={(props) => 
              <YungBullPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
            }
          />
          <Route 
            exact 
            path="/karai-banx" 
            render={(props) => 
              <BanxPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
            }
          />
          <Route 
            exact 
            path="/brand" 
            render={(props) =>
              <Brand />}
          />
          <Route 
            exact 
            path="/about" 
            component={(props) => 
             <About />}
            />
          <Route 
          exact 
          path="/contact" 
          render={(props) => 
            <Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
          }
         />
        </Switch>
        <Footer 
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
       </ScrollToTop>  
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
