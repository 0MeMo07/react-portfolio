import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        zIndex:11,
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.palette.background.default,
        color: '#ffffff',
        py: 3,
        textAlign: 'center',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography  variant="body2" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} React Portfolio. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Built with ❤️ by{' '}
        <Link href="https://github.com/0MeMo07"  variant="body2" target="_blank" rel="noopener noreferrer">
          MeMo
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
