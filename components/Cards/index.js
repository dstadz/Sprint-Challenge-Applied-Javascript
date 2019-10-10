// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

//create main card div
function dealCards() {

    function cardMaker(name, photo, title){

        let newcard = document.createElement('div');
        newcard.classList.add('card');

        //create headline & author
        let headline = document.createElement('div');
        let author = document.createElement('div');
        let imgContainer = document.createElement('div');
        let img = document.createElement('img');
        let span = document.createElement('span');

        //add relevant classes
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container')

        //nesting elements
        newcard.appendChild(headline)
        newcard.appendChild(author)
        author.appendChild(imgContainer)
        author.appendChild(span)
        imgContainer.appendChild(img)

        //add text content
        span.textContent =`By ${name}`
        img.src = photo
        headline.textContent = title

        return newcard;
    }

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        let arr = response.data
        //cycle through articles
        for (key in response.data) {            
             for (list in arr[key]) {
                for (article of arr[key][list]) {
                    console.log(arr[key][list][article])
                    let card = cardMaker(article.authorName,article.authorPhoto, article.headline);
                    cardContainer.appendChild(card)
                }
            }
        }
    })
    .catch( err => {
        console.log("Error:", err);
    })
    

}
dealCards()