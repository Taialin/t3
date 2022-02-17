   const getAllPlace = () => {
        return fetch('http://localhost:8087/all_places')
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
    };
