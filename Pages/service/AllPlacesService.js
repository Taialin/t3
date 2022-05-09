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

export async function getById(id) {
    const url = `${baseUrl}/all_places_id?id=` + id;
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}
