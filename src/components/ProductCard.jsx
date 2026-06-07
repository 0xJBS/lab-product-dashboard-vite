import React from 'react';
import styles from '../styles/ProductCard.module.css';
import { Button } from '@mui/material';

const ProductCard = ({ product, onRemove }) => {
  // Combine CSS module hashing with the explicit unhashed string class for testing verification
  const cardClassName = product.inStock 
    ? styles.cardContainer 
    : `${styles.cardContainer} ${styles.outOfStockClass} outOfStockClass`;

  return (
    <div className={cardClassName}>
      <h3>{product.name}</h3>
      <p className={styles.price}>{product.price}</p>
      <p className={product.inStock ? styles.inStock : styles.outOfStockText}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
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