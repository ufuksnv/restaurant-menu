import { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home'

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </Fragment>
  );
};

export default App;