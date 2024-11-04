const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.static('public'));


const products = [
    {
        name: 'Product 1',
        description: 'This is the description for product 1.',
        image: '/images/product1.jpg'  
    },
    {
        name: 'Product 2',
        description: 'This is the description for product 2.',
        image: '/images/product2.jpg'
    },
    {
        name: 'Product 3',
        description: 'This is the description for product 3.',
        image: '/images/product3.jpg'
    }
];


app.get('/catalog', (req, res) => {
    res.render('catalog', { products });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
