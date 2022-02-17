const getTaxiOrder = () => {
    return fetch('http://localhost:8087/taxi_order')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};
