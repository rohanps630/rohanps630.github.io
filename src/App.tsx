import React from 'react';
import './App.scss';
import {
  Header,
  About,
  Work,
  Skills,
  //   Testimonial,
  Footer,
} from './container';
import {
  Navbar
} from './components';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
