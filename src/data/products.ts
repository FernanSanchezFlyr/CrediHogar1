export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Juego de Sábanas Premium",
        price: 159900,
        description: "Juego de sábanas de alta calidad, 100% algodón egipcio, incluye sábana ajustable, plana y fundas.",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format",
        category: "Lencería"
    },
    {
        id: 2,
        name: "Cortinas Decorativas",
        price: 229900,
        description: "Cortinas elegantes con diseños exclusivos, perfectas para dar un toque de distinción a tu hogar.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format",
        category: "Cortinas"
    },
    {
        id: 3,
        name: "Lámpara de Mesa Moderna",
        price: 159900,
        description: "Lámpara LED con diseño contemporáneo, perfecta para tu sala de estar o dormitorio.",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format",
        category: "Iluminación"
    },
    {
        id: 4,
        name: "Juego de Sábanas de Algodón",
        price: 199900,
        description: "Set completo de sábanas 100% algodón, incluye sábana ajustable, plana y fundas de almohada.",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format",
        category: "Dormitorio"
    },
    {
        id: 5,
        name: "Set de Utensilios de Cocina",
        price: 149900,
        description: "Conjunto de utensilios de cocina en acero inoxidable, incluye 10 piezas esenciales.",
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&auto=format",
        category: "Cocina"
    },
    {
        id: 6,
        name: "Alfombra Decorativa",
        price: 179900,
        description: "Alfombra suave y elegante para sala de estar, diseño moderno y fácil de limpiar.",
        image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?w=500&auto=format",
        category: "Decoración"
    },
    {
        id: 7,
        name: "Cortinas Blackout",
        price: 139900,
        description: "Par de cortinas opacas térmicas, ideales para dormitorio o sala de estar.",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format",
        category: "Decoración"
    },
    {
        id: 8,
        name: "Set de Limpieza Ecológico",
        price: 99900,
        description: "Kit completo de productos de limpieza biodegradables y amigables con el medio ambiente.",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format",
        category: "Limpieza"
    },
    {
        id: 9,
        name: "Organizador de Zapatos",
        price: 69900,
        description: "Organizador vertical para 12 pares de zapatos, ideal para optimizar el espacio.",
        image: "https://images.unsplash.com/photo-1585914924626-15adac1e6402?w=500&auto=format",
        category: "Organización"
    },
    {
        id: 10,
        name: "Planta Artificial Decorativa",
        price: 89900,
        description: "Planta artificial de alta calidad con maceta incluida, perfecta para decoración interior.",
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format",
        category: "Decoración"
    }
];