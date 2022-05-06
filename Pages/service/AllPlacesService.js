import { baseUrl } from  "../config"

export async function getAllPlace() {
    const url = `${baseUrl}/all_places`;
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}

export async function getByCategoryId(category) {
    const url = `${baseUrl}/all_places_cat?category=` + category;
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}

const request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
    if (request.readyState !== 4) {
        return;
    }

    if (request.status === 200) {
        console.log('success', request.responseText);
    } else {
        console.warn('error');
    }
};

request.open('GET', `${baseUrl}/place_category`);
request.send();



