document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'lion',
      img: 'images/lion.png'
    },
    {
      name: 'gorilla',
      img: 'images/gorilla.png'
    },
    {
      name: 'elephant',
      img: 'images/elephant.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'fox',
      img: 'images/fox.png'
    },
    {
      name: 'panda',
      img: 'images/panda.png'
    },
    {
      name: 'lion',
      img: 'images/lion.png'
    },
    {
      name: 'gorilla',
      img: 'images/gorilla.png'
    },
    {
      name: 'elephant',
      img: 'images/elephant.png'
    },
    {
      name: 'fish',
      img: 'images/fish.png'
    },
    {
      name: 'fox',
      img: 'images/fox.png'
    },
    {
      name: 'panda',
      img: 'images/panda.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blanksquare.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blanksquare.png')
      cards[optionTwoId].setAttribute('src', 'images/blanksquare.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/darkgrey.png')
      cards[optionTwoId].setAttribute('src', 'images/darkgrey.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blanksquare.png')
      cards[optionTwoId].setAttribute('src', 'images/blanksquare.png')
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
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})