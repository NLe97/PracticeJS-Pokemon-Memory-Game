document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'Magmar',
        img: 'images/Magmar.png'
      },
      {
        name: 'Magmar',
        img: 'images/Magmar.png'
      },
      {
        name: 'Eevee',
        img: 'images/Eevee.png'
      },
      {
        name: 'Eevee',
        img: 'images/Eevee.png'
      },
      {
        name: 'Kingdra',
        img: 'images/Kingdra.png'
      },
      {
        name: 'Kingdra',
        img: 'images/Kingdra.png'
      },
      {
        name: 'Swampert',
        img: 'images/Swampert.png'
      },
      {
        name: 'Swampert',
        img: 'images/Swampert.png'
      },
      {
        name: 'Torterra',
        img: 'images/Torterra.png'
      },
      {
        name: 'Torterra',
        img: 'images/Torterra.png'
      },
      {
        name: 'Charizard',
        img: 'images/Charizard.png'
      },
      {
        name: 'Charizard',
        img: 'images/Charizard.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/pokeball.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/pokeball.png')
        cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/pokeball.png')
        cards[optionTwoId].setAttribute('src', 'images/pokeball.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
    createBoard()
  })