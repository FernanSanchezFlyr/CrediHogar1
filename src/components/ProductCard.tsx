import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Product } from '../data/products';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface ProductCardProps {
    product: Product;
}

const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const handleWhatsAppClick = () => {
        const message = `Hola, me interesa comprar: ${product.name} - ${formatPrice(product.price)}. ¿Está disponible?`;
        const whatsappUrl = `https://wa.me/+573177884743?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <Card sx={{ 
            maxWidth: 345, 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            borderRadius: '12px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 6px 12px rgba(147,51,81,0.2)',
            }
        }}>
            <CardMedia
                component="img"
                height="250"
                image={product.image}
                alt={product.name}
                sx={{ 
                    objectFit: 'cover',
                    borderRadius: '12px 12px 0 0'
                }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {product.description}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="h6" sx={{ 
                        color: '#933351',
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                    }}>
                        {formatPrice(product.price)}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>
                        A crédito o de contado
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#933351',
                            '&:hover': {
                                backgroundColor: '#7a2a43',
                            },
                            borderRadius: '25px',
                            textTransform: 'none',
                            fontSize: '1rem',
                            padding: '8px 20px'
                        }}
                        startIcon={<WhatsAppIcon />}
                        onClick={handleWhatsAppClick}
                    >
                        Comprar ahora
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProductCard;