import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import AnimatedRoutes from './Components/AnimatedRoutes';
import TypeWritter from './Components/TypeWritter';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);
  return (
    <>
      {isLoading ? (
        <TypeWritter />
      ) : (
        <Router>
          <Header />
          <AnimatedRoutes />
        </Router>
      )}
    </>
  );
};

export default App;
