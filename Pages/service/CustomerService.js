import {baseUrl} from "../config";

const getCustomer = () => {
    const url = `${baseUrl}/customer`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
};

export async function registrate(customer) {
    const url = `${baseUrl}/registrate`;
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}