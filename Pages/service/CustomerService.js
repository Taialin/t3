const getCustomer= () => {
    return fetch('http://localhost:8087/customer')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};
