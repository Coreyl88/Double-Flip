
// --- Variables -----
const section =  document.querySelector("section");
let firstClick = false;

// cards (an array of objects with the images and names of those images)
const getCards = [
    { picture: "./images/black panther.jpeg", 
      name: "black panther"
    },
    { picture: "./images/black widow.jpeg", 
      name: "black widow"
    },
    { picture: "./images/Captain America.jpeg", 
      name: "Captain America"
    },
    { picture: "./images/Dr. Strange.jpeg", 
      name: "Dr. Strange"
    },
    { picture: "./images/Hulk.jpeg", 
      name: "Hulk"
    },
    { picture: "./images/Ironman.jpeg", 
      name: "Ironman"
    },
    { picture: "./images/Scarlet Witch.jpeg", 
      name: "Scarlet Witch"
    },
    { picture: "./images/Thor.jpeg", 
      name: "Thor"
    },
    { picture: "./images/black panther.jpeg", 
      name: "black panther"
    },
    { picture: "./images/black widow.jpeg", 
      name: "black widow"
    },
    { picture: "./images/Captain America.jpeg", 
      name: "Captain America"
    },
    { picture: "./images/Dr. Strange.jpeg", 
      name: "Dr. Strange"
    },
    { picture: "./images/Hulk.jpeg", 
      name: "Hulk"
    },
    { picture: "./images/Ironman.jpeg", 
      name: "Ironman"
    },
    { picture: "./images/Scarlet Witch.jpeg", 
      name: "Scarlet Witch"
    },
    { picture: "./images/Thor.jpeg", 
      name: "Thor"
    },
];

//---Functions-----
// Sorting function so when the page is refreshed it will be a different game.
function shuffle () {
    const cardData = getCards;
        cardData.sort(() => Math.random() - 0.5);
        return cardData;
}

// Getting cards in html
const cardsAppear = () => {
    const cardData = shuffle();
    
    cardData.forEach((item) => {
        
        // storing the card data, creating new elements 
        const card = document.createElement("div");
        const cardFace = document.createElement("img");
        const cardBack = document.createElement("img");
        
        // give these a class so i can style them in css
        card.classList = 'card';
        cardFace.classList = 'cardFace';
        cardBack.classList = 'cardBack';
        
        // apply all the information to the card, appendChild moves it from current position to a new position. 
        cardFace.src = item.picture;
        card.setAttribute("name", item.name);
        section.appendChild(card);
        card.appendChild(cardFace);
        card.appendChild(cardBack);

        // when the card is clicked it will flip 180 degrees. since thats what i gave the class of cardFlipper in css.
        card.addEventListener("click", (e) => {
            card.classList.toggle("cardFlipper");
             whichCard(e);
             if(!firstClick) {
                time()
            }
             firstClick = true 
        });
    });
};

// Figuring out which card the user clicked on
const whichCard = (e) => {
    //e.target the is the element that we clicked on.
    const cardsClicked = e.target
    
    // add a class to cardsClicked
    cardsClicked.classList.add("checked");
    const checkedCards = document.querySelectorAll('.checked');
    
    // this is checking if the cards match.
    if (checkedCards.length === 2) {
        if (checkedCards[0].getAttribute('name') === 
            checkedCards[1].getAttribute('name')) {
                
            // matched cards will stay faced up after being matched and can no longer be clicked on. 
            checkedCards.forEach(card => {
                card.classList.remove('checked');
                card.style.pointerEvents = 'none';
                
            });
            } else {
            
            // below will remove it from being checked, the timeout is set to return the cards back facedown after a delay. 
            checkedCards.forEach(card => {

                card.classList.remove("checked");
                setTimeout(() => card.classList.remove("cardFlipper"), 800);
              });
            }
          }
        };

//Countdown Timer
function time(){
    let secs = 0
    let mins = 0
    let SS
    let MM
    setInterval(()=>{
        secs++
        if(secs==60){secs=0; mins++}

        secs<10?SS=`0${secs}`:SS=`${secs}`
        mins<10?MM=`0${mins}`:SS=`${mins}`
        
        document.querySelector('#time').innerHTML = `${MM}:${SS}`
    }, 1000)
}

cardsAppear();

