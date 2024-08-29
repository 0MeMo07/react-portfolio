import React from 'react';
import { Container, Typography, Button, Box, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundBg from './bg/BackgroundBg';
import profile from '../profile'; 
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const { home } = profile;
  const theme = useTheme();

  const handleClick = () => {
    const aboutElement = document.getElementById('About');
    aboutElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <BackgroundBg />
      <Container
        maxWidth="lg"
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: theme.palette.text.primary, 
          textAlign: 'center',
          py: 8,
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Avatar
                alt="Profile Avatar"
                src={home.avatarUrl}
                sx={{
                  width: 200,
                  height: 200,
                  border: `4px solid ${theme.palette.primary.main}`, 
                  boxShadow: `0 0 20px ${theme.palette.primary.main}80`, 
                  margin: 'auto',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              sx={{
                fontWeight: 'bold',
                letterSpacing: 2,
                color: theme.palette.text.primary, 
                mb: 2,
              }}
            >
              {home.title}
            </Typography>
            <Typography
              variant="h5"
              component={motion.h5}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              sx={{
                color: theme.palette.text.secondary, 
                mb: 3,
                fontWeight: 300,
              }}
            >
              {home.role}
            </Typography>
            <Typography
              variant="body1"
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              sx={{
                color: theme.palette.text.secondary, 
                mb: 4,
                maxWidth: '600px',
                margin: 'auto',
              }}
            >
              {home.description}
            </Typography>
            <Button
              variant="contained"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              sx={{
                backgroundColor: theme.palette.primary.main, 
                color: theme.palette.primary.contrastText, 
                padding: '12px 24px',
                fontSize: '18px',
                textTransform: 'uppercase',
                letterSpacing: 1,
                borderRadius: '30px',
                // boxShadow: `0 4px 6px ${theme.palette.primary.main}80`,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {home.buttonText}
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          {home.socialLinks.map((link, index) => (
            <motion.a
              key={index}
              whileHover={{ color: theme.palette.icon.hover, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.9 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.palette.icon.main, margin: '0 10px', transition: 'color 0.3s',}}
            >
              <link.icon size={32}/>
            </motion.a>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;
