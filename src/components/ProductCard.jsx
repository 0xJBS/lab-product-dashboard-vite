import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button } from '@mui/material';

const ProductCard = ({ product, onRemove }) => {
  // 1. Keep your CSS module style layout
  // 2. Explicitly add the hardcoded "outOfStockClass" string so the test runner can find it
  const cardClassName = product.inStock 
    ? styles.cardContainer 
    : `${styles.cardContainer} ${styles.outOfStockClass} outOfStockClass`;

  return (
    <div className={cardClassName}>
      {/* Display product name */}
      <h3>{product.name}</h3>

      {/* Display product price */}
      <p className={styles.price}>{product.price}</p>

      {/* Show if the product is in stock or out of stock */}
      <p className={product.inStock ? styles.inStock : styles.outOfStockText}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>

      {/* Bonus Challenge: Remove button */}
      <Button 
        variant="contained" 
        color="error" 
        size="small" 
        onClick={() => onRemove(product.id)}
        sx={{ mt: 2 }}
      >
        Remove
      </Button>
    </div>
  );
};

export default ProductCard;