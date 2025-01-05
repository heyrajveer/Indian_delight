import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MenuList } from '../data/data';
import Layout from '../components/Layout/Layout';

const PageNotFound = () => {
  const { dishName } = useParams();
  const navigate = useNavigate();

  // Find the dish from the MenuList
  const dish = MenuList.find(
    (item) => item.name.toLowerCase().replace(' ', '-') === dishName
  );

  // Handle "Order" button click
  const handleOrderClick = () => {
    alert('Order placed!'); // Show alert
    navigate('/'); // Navigate back to homepage
  };

  // If no dish is found, display "Dish not found!"
  if (!dish) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>Dish not found!</h2>
          <p>Sorry, the dish you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  // If dish is found, display dish details
  return (
    <Layout>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>{dish.name}</h1>
        <img
          src={dish.image}
          alt={dish.name}
          style={{ width: '400px', borderRadius: '10px', marginBottom: '20px' }}
        />
        <p style={{ fontSize: '18px', margin: '10px 0' }}>{dish.description}</p>
        <h3>Price: ₹{dish.price}</h3>
        <button
          onClick={handleOrderClick}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Order Now
        </button>
      </div>
    </Layout>
  );
};

export default PageNotFound;
