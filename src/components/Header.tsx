import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ 
            background: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            color: '#933351'
        }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                color: '#933351',
                                textDecoration: 'none',
                            }}
                        >
                            CREDI HOGAR
                        </Typography>
                    </Box>

                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: 1, md: 2 }
                    }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                color: '#933351',
                                fontWeight: 500
                            }}
                        >
                            Haz tu hogar más bonito, a crédito o de contado
                        </Typography>
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            color: '#933351',
                            bgcolor: 'rgba(147, 51, 81, 0.1)',
                            padding: '4px 12px',
                            borderRadius: '20px'
                        }}>
                            <PhoneIcon sx={{ mr: 1, fontSize: '1rem' }} />
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                317 788 4743
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;