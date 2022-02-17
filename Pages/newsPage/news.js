const url =
    "https://newsapi.org/v2/top-headlines?country=ru&apiKey=82d92c52deb2497a887654ca5ce30678";

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}
/*
fetch("https://google-news.p.rapidapi.com/v1/top_headlines?lang=en&country=US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "google-news.p.rapidapi.com",
        "x-rapidapi-key": "14b6fd0f2bmshdcf2e10d46e3c62p15d0c5jsn128ea0c4225d"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
*/
/*
fetch("https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=Elon%20Musk&lang=ru&sort_by=relevancy&page=1&media=True", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host: "newscatcher.p.rapidapi.com",
        "x-rapidapi-key": "14b6fd0f2bmshdcf2e10d46e3c62p15d0c5jsn128ea0c4225d"
    }
})
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
*/
/*
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});
https://api.webz.io/filterWebContent?token=bd4b76f8-624e-449e-a99a-58edb984fe62&q=site_type:news%20country:BY%20site_category:tech
xhr.open("GET", "https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=Elon%20Musk&lang=ru&sort_by=relevancy&page=1&media=True");
xhr.setRequestHeader("x-rapidapi-host", "newscatcher.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "14b6fd0f2bmshdcf2e10d46e3c62p15d0c5jsn128ea0c4225d");

xhr.send(data);*/
