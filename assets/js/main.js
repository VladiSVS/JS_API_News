//93b404087ea643e5990b6b7401d61ed2

class News {
    constructor(title, description, date, img, url) {
        this.title = title
        this.description = description
        this.date = date
        this.img = img
        this.url = url
    }
    pushNews() {
        document.querySelector('section').innerHTML += `
        <article>
            <img src="${this.img}" alt=" ">
            <div>
                <h2>${this.title}</h2>
                <p>${this.description}</p>
                <span>${this.date}</span>
                <button type="button" onclick="location.href='${this.url}'">READ MORE</button>
            </div>
        </article>
        `
    }
}

function openNews() {
    // document.querySelector('section').innerHTML = '' //reset

    let keyNews = "deutschland"

    fetch(`https://newsapi.org/v2/everything?q=${keyNews}&from=2021-08-08&sortBy=publishedAt&apiKey=93b404087ea643e5990b6b7401d61ed2`)
        .then(response => response.json())
        .then(data => {
            let newsArticle = data.articles
            console.log(newsArticle)
            newsArticle.forEach(elt => {
                let date = elt.publishedAt
                let title = elt.title
                let description = elt.description
                let newsImg = elt.urlToImage
                let url = elt.url
                let newNews = new News(title, description, date, newsImg, url)

                newNews.pushNews()
            })
        })
}

openNews()

