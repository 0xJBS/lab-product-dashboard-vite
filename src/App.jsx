import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button, Stack, Container } from '@mui/material';

const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all');

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  return (
    <Container maxWidth="md">
      {/* Explicit title to pass 'renders product dashboard title' test */}
      <h1 id="header">Product Dashboard</h1>
      
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
        <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => setFilter('all')}>
          All Products
        </Button>
        <Button variant={filter === 'inStock' ? 'contained' : 'outlined'} onClick={() => setFilter('inStock')}>
          In Stock
        </Button>
        <Button variant={filter === 'outOfStock' ? 'contained' : 'outlined'} onClick={() => setFilter('outOfStock')}>
          Out of Stock
        </Button>
      </Stack>

      <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
    </Container>
  );
};

export default App;