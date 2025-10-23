import React, { useState } from 'react';
import { Container, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const categories = Array.from(new Set(products.map(product => product.category)));
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ 
                    mb: 2,
                    color: '#933351',
                    fontWeight: 'bold',
                    '& span': {
                        color: '#E8C391'
                    }
                }}>
                    Lencería para el hogar <span>•</span> Artículos exclusivos
                </Typography>
                <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#666' }}>
                    Decoramos tu hogar con estilo y facilidad
                </Typography>
                
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel id="category-select-label">Filtrar por Categoría</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={selectedCategory}
                        label="Filtrar por Categoría"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <MenuItem value="">Todas las categorías</MenuItem>
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
                {filteredProducts.map((product) => (
                    <Box key={product.id}>
                        <ProductCard product={product} />
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default HomePage;