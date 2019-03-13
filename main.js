let pageNumber=1;
let news=[];
let total = 10


async function fetchNews(){
    let url = `https://newsapi.org/v2/everything?q=apple&from=2019-03-12&to=2019-03-12&sortBy=popularity&apiKey=ed03e96db331416984e7dd1d248e28fb&page=${pageNumber}&pageSize=10`;
    let result = await fetch(url);
    let data = await result.json();
    news = news.concat(data.articles);
    document.getElementById('totalArticles').innerHTML = `Total Articles: ${total}/${data.totalResults}`
    render();
}
function render() {
    
    document.getElementById('newsContent').innerHTML = news.map(articles => 
        `</div>
        <div class="container">
            <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${articles.urlToImage}" class="card-img"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title"><a href="${articles.url}">${articles.title}</a></h5>
                                <p class="card-text">${articles.content} <a href="${articles.url}">read more</a></p>
                                <p class="card-text"><small class="text-muted">Puplic at ${(articles.publishedAt)}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `)
   
}


function newsMoreAdd(){
    pageNumber = pageNumber+1;
    total = total +10;
    fetchNews();
}
document.getElementById("btn-news").addEventListener("click", newsMoreAdd)
fetchNews();
