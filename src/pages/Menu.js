import React from 'react';
import { MenuList } from '../data/data';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card
            key={menu.name}
            sx={{
              maxWidth: "410px",
              m: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              '&:hover': {
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              }
            }}
          >
            {/* Link to the dish's route */}
            <Link to={`/menu/${menu.name.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none' }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component="img"
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component="div" color="text.primary">
                    {menu.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
