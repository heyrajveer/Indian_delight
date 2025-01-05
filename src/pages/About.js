import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
<Layout>
    <Box  sx={{
      my:15,
      textAlign:"center",
      "& h4":{
        fontWeight:"bold",
         my:2,
         fontSize:'2rem'
      },
      "& p":{
       textAlign:"justify",
        mx:2,
      },
      "@media (max-width:600px)":{
       mt:0,
    }
    }}>
<Typography variant='h4' >
Experience the True Taste of India!
</Typography>
<p>
Welcome to *Indian Delights*, where we bring the vibrant and diverse flavors of India straight to your plate! Our restaurant is more than just a place to eat—it's a journey into the heart of Indian culinary heritage. We take pride in offering a menu that celebrates the rich traditions of Indian cuisine, carefully crafted to delight your taste buds and evoke a sense of comfort and joy.  

From the soft and fluffy idlis of the South to the crispy, golden dosas paired with tangy and aromatic sambar, every dish tells a story of India’s culinary brilliance. Explore the spicy, wholesome flavors of North India with our chole and savor the sweet and savory delights of authentic Gujarati specialties, all prepared with the freshest ingredients and age-old recipes.  

At *Indian Delights*, we aim to create an experience that blends tradition and taste, whether you’re looking for a comforting meal or a unique culinary adventure. Join us to celebrate the true spirit of Indian food, served with love and authenticity!
</p>
<br/>
<br/>
<p>
At *Indian Delights*, we are deeply committed to providing a dining experience that is as delightful as it is authentic. We take pride in using the freshest ingredients, handpicked to ensure quality, and blending them with aromatic spices that embody the essence of Indian cooking. Every dish on our menu is crafted with passion, paying homage to the rich culinary traditions of India while catering to modern tastes.  

Whether you're in the mood for a hearty, satisfying meal or a light, flavorful snack, our menu has something for everyone. Indulge in the comfort of familiar classics or explore the diverse and regional specialties of Indian cuisine. From the rich and creamy curries to the crispy and savory snacks, every bite is a celebration of taste and tradition.  

Our warm and welcoming ambiance, paired with exceptional service, ensures that every visit is a memorable experience. Whether you’re dining with family, catching up with friends, or simply treating yourself, *Indian Delights* is the perfect destination to savor the authentic flavors and vibrant spirit of India. Come, let us take you on a culinary journey that you’ll cherish forever!
</p>
    </Box>
</Layout>
  )
}

export default About
