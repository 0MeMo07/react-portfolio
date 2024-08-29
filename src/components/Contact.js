import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '@mui/material/styles';
import profile from '../profile';

const Contact = () => {
  const { contact } = profile;
  const theme = useTheme();

  return (
    <Container
      maxWidth="false"
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: 'relative',
        zIndex: 100,
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: theme.palette.background.default, 
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.primary,
        textAlign: 'center',
        py: 8,
        px: 4,
      }}
    >
      <Box width="100%" maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          {contact.title}
        </Typography>
        <TypeAnimation
          sequence={[`${contact.description}`, 1000]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{ display: 'inline-block', marginBottom: '30px', color: theme.palette.text.secondary }} 
        />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label={contact.nameLabel}
              variant="outlined"
              sx={{
                input: { color: theme.palette.text.primary }, 
                label: { color: theme.palette.text.secondary },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main, 
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.light, 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.dark, 
                  },
                },
                mb: 3,
              }}
            />
            <TextField
              fullWidth
              label={contact.emailLabel}
              variant="outlined"
              type="email"
              sx={{
                input: { color: theme.palette.text.primary },
                label: { color: theme.palette.text.secondary },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.light,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                },
                mb: 3,
              }}
            />
            <TextField
              fullWidth
              label={contact.messageLabel}
              variant="outlined"
              multiline
              rows={6}
              sx={{
                input: { color: theme.palette.text.primary },
                label: { color: theme.palette.text.secondary },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.primary.light,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.dark,
                  },
                },
                mb: 3,
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main, 
                color: theme.palette.primary.contrastText, 
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
              fullWidth
            >
              {contact.sendButton}
            </Button>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.secondary.main, fontWeight: 700 }}>
              {contact.connectTitle}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {contact.links.map((link, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mx: 1,
                    color: theme.palette.icon.main,
                    '&:hover': {
                      color: theme.palette.icon.hover, 
                    },
                  }}
                >
                  <link.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
