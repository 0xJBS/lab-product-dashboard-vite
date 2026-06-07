import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductList = ({ products, onRemove }) => {
  // Check if the product list is empty and display a message if needed
  if (products.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No products available matching this criteria.</p>;
  }

  return (
    <div id="product-list">
      <Grid container spacing={3} justifyContent="center">
        {/* Iterate over the products array and render a ProductCard for each product */}
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} onRemove={onRemove} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;