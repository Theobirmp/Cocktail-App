import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Home from './pages/Home';
import About from "./pages/About"
import Favourites from './pages/Favourites';
import { AppProvider } from "./components/AppContext";
import CocktailPage from './pages/CocktailPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AppProvider>
    <Router>
      <Nav/>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/cocktail/:cocktailName">
          <CocktailPage/>
        </Route>
        <Route exact path="/favourites">
          <Favourites/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </AppProvider>
  );
}

export default App;
