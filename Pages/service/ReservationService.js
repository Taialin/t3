const getReservations = () => {
    return fetch('http://localhost:8087/reservation')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};
