import { Product } from "./types/Product";

export const sampleProducts:Product[] = [
    {
        name: 'Arapima',
        slug: 'Arapima',
        category: 'Monster',    
        image: '../images/p1.jpeg',
        price: 400,
        countInStock: 10,
        brand: 'American',
        rating: 4.5,
        numReviews: 10,
        description: 'High quality fish'
    },
    {
        name: 'Phirana',
        slug: 'Phirana',
        category: 'Monster',    
        image: '../images/p2.jpeg',
        price: 10,
        countInStock: 20,
        brand: 'American',
        rating: 4.0,
        numReviews: 10,
        description: 'High quality fish'
    },
    {
        name: 'Hikary',
        slug: 'Hikary',
        category: 'Food',    
        image: '../images/p3.jpeg',
        price: 50,
        countInStock: 0,
        brand: 'Japan',
        rating: 4.8,
        numReviews: 17,
        description: 'High quality Product'
    },
    {
        name: 'Dry Fish powder',
        slug: 'Dry Fish powder',
        category: 'Food',    
        image: '../images/p4.jpeg',
        price: 10,
        countInStock: 15,
        brand: 'Sri lanka',
        rating: 4.5,
        numReviews: 14,
        description: 'High quality Product'
    },
]