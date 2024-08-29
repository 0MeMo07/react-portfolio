import React from 'react';
import { Container, Typography, Stack, Card, CardContent, Avatar, Grid, Divider, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import profile from '../profile'; 
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '@mui/material/styles';

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const { about, skills, projects } = profile; 
  const theme = useTheme(); 
  
  return (
    <Container
      id="About"
      maxWidth={false}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      sx={{
        position: 'relative',
        zIndex: 100,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.default, 
        color: theme.palette.text.primary, 
        textAlign: 'center',
        py: 8,
      }}
    >
      <Box width="100%" maxWidth="lg">
        <Box mb={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            {about.title}
          </Typography>
          <TypeAnimation
            sequence={[
              about.description,
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}
            type="body1"
            style={{ display: 'inline-block', color: theme.palette.text.secondary }} 
          />
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={10}>
            <Card variant="outlined" sx={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  My Skills
                </Typography>
                <Divider sx={{ mb: 2, bgcolor: theme.palette.divider }} />
                <Grid container spacing={2} justifyContent="center">
                  {skills.map((skill) => (
                    <Grid 
                      item 
                      xs={6} 
                      sm={4} 
                      md={3} 
                      key={skill.name}
                      component={motion.div}
                      variants={animationVariants}
                      transition={{ duration: 0.5, delay: skills.indexOf(skill) * 0.2 }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                        <Avatar sx={{ bgcolor: skill.color, width: 40, height: 40 }}>
                          <skill.Icon size={20} color={theme.palette.icon.main} />
                        </Avatar>
                        <Stack spacing={0.5}>
                          <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                            {skill.name}
                          </Typography>
                          <Chip label={skill.name} color="secondary" variant="outlined" size="small" />
                        </Stack>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box mt={6}>
          <Typography variant="h5" gutterBottom>
            Notable Projects
          </Typography>
          <Divider sx={{ mb: 2, bgcolor: theme.palette.divider }} />
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={project.title}
                component={motion.div}
                variants={animationVariants}
                transition={{ duration: 1, delay: index * 0.5 }}
              >
                <Card variant="outlined" sx={{ height: '100%', borderColor: theme.palette.divider }}>
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary, 
                    }}
                  >
                    <Box>
                      <Typography variant="h6" component="h3" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="primary">
                        <a href={project.link} style={{ color: theme.palette.info.main, textDecoration: 'none' }}>
                          View Project
                        </a>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
