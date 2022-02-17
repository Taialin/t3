const getOrders = () => {
    return fetch('http://localhost:8087/_order')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};
