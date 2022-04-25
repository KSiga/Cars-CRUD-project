import React, { Component, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/listPage/listPage.css';
import Navigation from './layouts/Navigation';
import Header from './layouts/Header';
import Page from './layouts/Page';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav><Navigation /></nav>
        <header><Header /></header>
        <main>
          <section><Page /></section>
        </main>
        <footer><Footer /></footer>
      </Router>
    </div>
  )
}
export default App;

/*
{user?.loggedIn === false ? "logged in" : <LoggedAdmin />}
class App extends Component {
  const user = useContext(UserContext);
  render() {
    return (
      <div className='App'>
        <Router>
          <nav><Navigation /></nav>
          <header><Header /></header>
          <main>
            <section><Page /></section>
          </main>
          <footer><Footer /></footer>
        </Router>
      </div>
    )
  }
}
*/

/*
- po dodaniu nowego rekordu, select z sortowaniem powinien ustawić się na 'default' - 10.04.2022
- id tworzy się po długości tablicy (mogą być 2 takie same id) (w bazie bedzie automatycznie) - 19.04.2022
*/