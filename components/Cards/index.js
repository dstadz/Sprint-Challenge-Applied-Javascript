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

function dealCards() {

    const cardContainer = document.querySelector('.card-container');

    function cardMaker(content){
        //create main card div
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

        //nesting classes
        newcard.appendChild(headline)
        newcard.appendChild(author)
        author.appendChild(imgContainer)
        author.appendChild(span)
        imgContainer.appendChild(img)

        return newcard
    }




        newcard.textContent = content;
        
        return newcard;
    }

}
dealCards()