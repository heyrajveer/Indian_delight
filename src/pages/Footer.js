import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: 'center',
          bgcolor: '#1A1A19',
          color: 'white',
          p: 1,
        }}
      >
        <Box
          sx={{
            my: 1,
            '& svg': {
              fontSize: '40px',
              cursor: 'pointer',
              mr: 1,
              transition: 'all 400ms',
            },
          }}
        >
          {/* Icons with individual hover styles */}
          <InstagramIcon
            sx={{
              '&:hover': {
                color: 'red',
                transform: 'translateY(-5px)',
              },
            }}
          />
          <FacebookIcon
            sx={{
              '&:hover': {
                color: 'blue',
                transform: 'translateY(-5px)',
              },
            }}
          />
          <YouTubeIcon
            sx={{
              '&:hover': {
                color: 'red',
                transform: 'translateY(-5px)',
              },
            }}
          />
          <LinkedInIcon
            sx={{
              '&:hover': {
                color: ' #3232ff',
                transform: 'translateY(-5px)',
              },
            }}
          />
          <TwitterIcon
            sx={{
              '&:hover': {
                color: '#ADD8E6',
                transform: 'translateY(-5px)',
              },
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            '@media (max-width:600px)': {
              fontSize: '1rem',
            },
          }}
        >
          All Rights Reserved &copy; Techinfo YT
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
