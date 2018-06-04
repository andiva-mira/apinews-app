export function newsApiCall() {

	// DOM Elements
const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tabs = document.querySelectorAll('.tabs');
const section = document.getElementById('newsSection');


// News API Data
const apiKey = '22e8781300b74ae1b67d95e8d027d555';
const guardUrl = 'https://newsapi.org/v2/top-headlines?sources=the-guardian-uk&apiKey=' + apiKey;
const bbcNewsUrl = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + apiKey;
const reutersUrl = 'https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=' + apiKey;
const natGeoUrl = 'https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=' + apiKey;


// Request News Function
async function getNews(url) {
	var response = await fetch(url);
	if (response.ok) {
		const jsonResponse = await response.json();
		//console.log(jsonResponse);

		// saving the first 10 articles from every object
		const articlesArray = jsonResponse.articles.slice(0, 10);
		console.log(articlesArray);
		return articlesArray;
	}
}

// Render News Function
function renderNews(articles) {
	articles.map((article, index) => {
		const author = (article.author != null ) ? ('<small>By ' + article.author + '</small>') : ' ';
		const description = (article.description != null ) ? ('<p> ' + article.description + '</p>') : ' ';
		
		const newsContent =
			'<article class="article">' +
				'<div class="news-content">' +
					'<div class="title-container">' +
						'<h2 class="title"><span class="quotes"></span>' + article.title + '</h2>' +
					'</div>' +
					'<div class="description">' +
					author +
					description +
					'<a href="' + article.url + '" target="_blank" class="readmore"><span class="btn-text">Read More</span></a>' +
					'</div>' +
				'</div>' +
				'<div class="image-container">' +
					'<img class="image" src="' + article.urlToImage + '" />' +
				'</div>' +
			'</article>';

		section.innerHTML += newsContent;
	});
	return articles;
}

function displayNewsArticles(articlesArray) {
	renderNews(articlesArray);
}



function displayFirstTabContent() {
	section.innerHTML = ' ';
	tab1.style.borderTop = "1px solid #9c7737";
	getNews(guardUrl).then(displayNewsArticles);
}


// display first tab content on window load
window.onload = displayFirstTabContent();



// Tabs Event Listeners

tab1.addEventListener('click', function() {
	// remove content
	section.innerHTML = ' ';

	// add top border to active tab 
	this.style.borderTop = "1px solid #9c7737";
	tab2.style.borderTop = 'transparent';
	tab3.style.borderTop = 'transparent';
	tab4.style.borderTop = 'transparent';

	// Call getNews() 
	getNews(guardUrl).then(displayNewsArticles);
}, false);

tab2.addEventListener('click', function() {
	// remove content
	section.innerHTML = ' ';

	// add top border to active tab 
	this.style.borderTop = "1px solid #9c7737";
	tab1.style.borderTop = 'transparent';
	tab3.style.borderTop = 'transparent';
	tab4.style.borderTop = 'transparent';

	// Call getNews() 
	getNews(bbcNewsUrl).then(displayNewsArticles);
}, false);

tab3.addEventListener('click', function() {
	// remove content
	section.innerHTML = ' ';

	// add top border to active tab 
	this.style.borderTop = "1px solid #9c7737";
	tab1.style.borderTop = 'transparent';
	tab2.style.borderTop = 'transparent';
	tab4.style.borderTop = 'transparent';

	// Call getNews() 
	getNews(reutersUrl).then(displayNewsArticles);
}, false);

tab4.addEventListener('click', function() {
	// remove content
	section.innerHTML = ' ';

	// add top border to active tab 
	this.style.borderTop = "1px solid #9c7737";
	tab1.style.borderTop = 'transparent';
	tab2.style.borderTop = 'transparent';
	tab3.style.borderTop = 'transparent';

	// Call getNews() 
	getNews(natGeoUrl).then(displayNewsArticles);
}, false);

}