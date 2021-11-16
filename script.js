// run as live server

let news
let url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=196510ef2b3b4948b275754b514eeab4';
const onloadNews = () =>{
    fetchAPI()
}

let fetchAPI = async() => {
    try {
        const response = await fetch(url)
        news = await response.json()
        updateNews()
    } catch (error) {
        console.log("error", error)
    }
}


const updateNews = ()=> {
    let newsHTML = ""
    news.articles.map((item) => {
        return (newsHTML += `
        <div class="news_body">
        <img src="${item.urlToImage}" alt="news image" class="news_img">
        <h3 class="news_tittle">${item.title}</h3>
        <p class="news_source">${item.source.name}</p>
        <a href="${item.url}" class="news_link">more</a>
        </div>
        `)

    })
    document.getElementById("news_container").innerHTML = newsHTML
}