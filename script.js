fetch('http://localhost:1337/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(products => {
        console.log('Products:', products);
    })
    .catch(error => {
        console.error('Error:', error);
    })