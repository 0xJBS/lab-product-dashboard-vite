import React from 'react';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <p style={{ textAlign: 'center', color: '#666' }}>No products available matching this criteria.</p>;
  }

  return (
    <div id="product-list">
      <Grid container spacing={3} justifyContent="center">
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