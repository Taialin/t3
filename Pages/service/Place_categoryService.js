const url =
    "http://localhost:8087/place_category";

export async function getPlaceCategory() {
    let result = await fetch(url).then(response => response.json());
    return result.place_articles;
}

