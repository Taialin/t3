import { baseUrl } from  "../config"
const url = `${baseUrl}/place_category`;

export async function getPlaceCategory() {
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}
