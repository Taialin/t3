const getAllServices = () => {
    return fetch('http://localhost:8087/add_serv')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};
