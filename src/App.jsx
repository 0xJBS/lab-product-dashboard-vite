import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button, Stack, Container } from '@mui/material';

const initialProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
];

const App = () => {
  // Define initial product data
  const [products, setProducts] = useState(initialProducts);
  
  // Implement state to manage filtering ('all', 'inStock', 'outOfStock')
  const [filter, setFilter] = useState('all');

  // Implement logic to delete a product
  const handleRemoveProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Implement logic to filter products based on availability
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // 'all'
  });

  return (
    <Container maxwidth="md">
      {/* Updated header title to pass the 'renders product dashboard title' test */}
      <h1 id="header">Product Dashboard</h1>
      
      {/* Material UI layout buttons to allow filtering by availability */}
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

      {/* Render the ProductList component and pass filtered products and delete handler */}
      <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
    </Container>
  );
};

export default App;