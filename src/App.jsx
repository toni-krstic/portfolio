import React from 'react';

import { Header, Projects, Skills, Footer  } from './container';
import { Navbar } from './components';
import {images} from './constants'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
