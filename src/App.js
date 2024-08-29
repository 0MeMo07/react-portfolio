import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import { Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const App = () => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>React Editable Portfolio</title>
      </Helmet>
      <Home />
      <Divider sx={{  position: 'relative', backgroundColor: theme.palette.divider.main }} />
      <About />
      <Divider sx={{  position: 'relative', backgroundColor: theme.palette.divider.main }} />
      <Contact />
      <Footer /> 
    </>
  );
};

export default App;
