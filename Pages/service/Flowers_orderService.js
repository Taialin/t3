const getFlowersOrders = () => {
    return fetch('http://localhost:8087/flowers_order')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};
