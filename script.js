const games = [
{
id: 1,
name: 'Високосний калькулятор',
category: 'numerical',

},
{
id: 2,
name: 'Вгадай число',
category: 'numerical',

},
{
id: 3,
name: 'Камінь-Ножиці-Папір',
category: 'game',

},
{
id: 4,
name: 'Калькулятор',
category: 'numerical',

},
{
id: 5,
name: 'Калькулятор часу',
category: 'numerical',

},
{
id: 6,
name: 'Google динозаврик',
category: 'game',

},
{
id: 7,
name: 'Футбол',
category: 'game',

},
{
id: 8,
name: 'Найбільше число',
category: 'numerical',

},
{
id: 9,
name: 'Наша команда',
category: 'acquaintance',

},
{
id: 10,
name: 'Вчений',
category: 'acquaintance',

},
];



let openMenu = document.querySelector(".header__link-icon");
let menu = document.querySelector(".header__dropdown");

openMenu.addEventListener('click', () => {
  menu.classList.toggle('header__dropdown--active')
})

let leapCalculatorBtn = document.querySelector(".game-calc__btn");
let leapCalculatorInput = document.querySelector(".game-calc__input");
let leapCalculatorResult = document.querySelector(".game-calc__result");

leapCalculatorBtn.addEventListener("click", () => {
  if (
    isNaN(leapCalculatorInput.value) ||
    leapCalculatorInput.value.length === 0
  ) {
    leapCalculatorResult.style.color = "black";
    return (leapCalculatorResult.textContent = "введіть число");
  }

  if (Number(leapCalculatorInput.value) % 4 !== 0) {
    leapCalculatorResult.textContent = "Ви народилися не у високосний рік!";
    leapCalculatorResult.style.color = "#990000";
  } else {
    leapCalculatorResult.textContent = "Ви народилися у високосний рік!";
    leapCalculatorResult.style.color = "#039900";
  }
});

let guessNumberBtn = document.querySelector("#btn-guess-number");
let guessNumberInput = document.querySelector("#input-guess-number");
let guessNumberResult = document.querySelector("#result-guess-number");

guessNumberBtn.addEventListener("click", () => {
  let currentNumber = Math.floor(Math.random() * 10);

  if (isNaN(guessNumberInput.value) || guessNumberInput.value.length === 0) {
    guessNumberResult.style.color = "black";
    return (guessNumberResult.textContent = "введіть число");
  }

  if (Number(guessNumberInput.value) !== currentNumber) {
    guessNumberResult.textContent = `Ви програли, комп’ютер загадав (${currentNumber})`;
    guessNumberResult.style.color = "#990000";
  } else {
    guessNumberResult.textContent = `Вітаю, ви вгадали число! (${currentNumber})`;
    guessNumberResult.style.color = "#039900";
  }
});

let roshamboBtns = document.querySelectorAll(".roshambo__btn");
let roshamboResult = document.querySelector(".roshambo__result");
let roshamboComputerResult = document.querySelector(".roshambo__computer-result");
let computerResult;
let roshamboCalcComputer = document.querySelector(".roshambo__calc--computer");
let roshamboCalcUser = document.querySelector(".roshambo__calc--user");


roshamboBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    computerResult = roshamboBtns[Math.floor(Math.random() * 3)];

    if (
      (computerResult.dataset.action === "stone" &&
        btn.dataset.action === "paper") ||
      (computerResult.dataset.action === "scissors" &&
        btn.dataset.action === "stone") ||
      (computerResult.dataset.action === "paper" &&
        btn.dataset.action === "scissors")
    ) {
      roshamboResult.textContent = "Ви виграли раунд!";
      roshamboResult.style.color = "#039900";
      roshamboCalcUser.textContent = Number(roshamboCalcUser.textContent) + 1;
    } 

    else if (btn.dataset.action === computerResult.dataset.action) {
      roshamboResult.textContent = "Нічия";
      roshamboResult.style.color = "black";
    }
    
    else {
      roshamboResult.textContent = "Ви програли раунд!";
      roshamboResult.style.color = "#990000";
      roshamboCalcComputer.textContent = Number(roshamboCalcComputer.textContent) + 1;
    }
  });
});

roshamboComputerResult.addEventListener("click", () => {
  roshamboResult.textContent = ` Варіант комп'ютера: ${computerResult.dataset.action}`;
});

let inputsNum = document.querySelectorAll('.calc__input');
let result = document.querySelector('.calc__result');
let btns = document.querySelectorAll('#calc-btn');
let btnTotal = document.querySelector('.calc__total-btn');

let firstInputValue;
let secondInputValue ;

inputsNum.forEach(input => {
  input.addEventListener('input', () => {
    if (input.dataset.action === 'first-value') {
      firstInputValue = Number(input.value);
    }
    if (input.dataset.action === 'second-value') {
      secondInputValue = Number(input.value);
    }
  })
})

let operation;

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    return operation = btn.textContent;
  })
});


btnTotal.addEventListener('click', () => {
  if (operation === '+') {
    result.textContent = firstInputValue + secondInputValue;
  }
  else if (operation === '-') {
    result.textContent = firstInputValue - secondInputValue;
  }
  else if (operation === '*') {
    result.textContent = firstInputValue * secondInputValue;
  }
  else if (operation === '/') {
    result.textContent = firstInputValue / secondInputValue;
  }
  else {
    result.textContent = 'ви нічого не вибрали';
  }
});

let timeInput = document.querySelector('#time-input');
let timeBtn = document.querySelector('#time-btn');
let timeResult = document.querySelector('#time-result');
let timeInputValue;

timeBtn.addEventListener('click', () => {
  if (timeInput.value.length === 0) {
    return timeResult.textContent = 'введіть число в поле';
  }

  if (isNaN(timeInput.value)) {
    return timeResult.textContent = 'введіть число в поле';
  }

  timeInputValue = Number(timeInput.value);

  let yers = 0;
  let days = 0;
  let hours = Math.floor(timeInputValue / 60);
  let minutes = timeInputValue % 60;
  let countDays;

  if (hours >= 24) {
    countDays = Math.floor(hours / 24);
    hours -= countDays * 24;
    days += countDays;
  }

  if (days >= 1) {
    return timeResult.textContent = `${days} дн. ${hours} год ${minutes} хв`;
  }

  timeResult.textContent = `${hours} год ${minutes} хв`;
  
});

let footbalArea = document.querySelector('#football-area');
let ball = document.querySelector('#ball');

footbalArea.addEventListener('click', event => {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  let styles = ball.getBoundingClientRect();

  let x = styles.left;
  let y = styles.top;

  let ballX = mouseX - x;
  let ballY = mouseY - y;

  ball.style.left = `${ballX + x}px`;
  ball.style.top = `${ballY + y}px`; 
});

let maxNumInputs = Array.from(document.querySelectorAll('.max-number__input'));
let maxNumResult = document.querySelector('.max-number__result');

let findMaxNum = arr => Math.max(...arr);

maxNumInputs.forEach((input,index) => {
  input.addEventListener('input', () => {

    maxNumInputs[index] = Number(input.value);

    if (!isNaN(findMaxNum(maxNumInputs))) {
      maxNumResult.textContent = `Найбільше число, яке ви ввели - ${findMaxNum(maxNumInputs)}`;
      console.log(maxNumInputs);
    }

  })
});


let items = Array.from(document.querySelectorAll('.team__item'));
let btnLeft = document.querySelector('.team__btn-left');
let btnRight = document.querySelector('.team__btn-right');
let listNav = document.querySelectorAll('.team__line');
let acc = 0;
let arr = [];
let maxIndex; 
let minIndex

items.forEach((item,idx) => {
  if (idx > 0) {
    item.classList.add('team__hidden');
  }

  arr.push(idx);

  maxIndex = Math.max(...arr);
  minIndex = Math.min(...arr);

});

listNav.forEach((item,idx) => {
  if (idx === 0) {
    item.classList.add('team__active');
  }
});

function getRightClick() {
  acc++;

  listNav.forEach((item,idx) => {
    item.classList.remove('team__active');
    
    if (idx === acc) {
      item.classList.toggle('team__active');
    }
  })

  items.forEach((item,idx) => {
    item.classList.add('team__hidden');

    btnLeft.addEventListener('click', getLeftClick);

    if (idx === acc) {
      item.classList.toggle('team__hidden');

      if (idx === maxIndex) {
        btnRight.removeEventListener('click', getRightClick);
      }   
    } 

    if (idx === minIndex) {
      btnLeft.addEventListener('click', getLeftClick);
    }
  });
}

function getLeftClick() {

  acc --;

  listNav.forEach((item,idx) => {
    item.classList.remove('team__active');
    
    if (idx === acc) {
      item.classList.toggle('team__active');
    }
  })

  items.forEach((item,idx) => {
    item.classList.add('team__hidden');

    if (idx === acc) {
      item.classList.toggle('team__hidden');

      if (idx === minIndex) {
        btnLeft.removeEventListener('click', getLeftClick);
      }

    } 

    if (idx === maxIndex) {
      btnRight.addEventListener('click', getRightClick);
    }
  });
}

btnRight.addEventListener('click', getRightClick);




const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

let arrScientists = Array.from(document.querySelectorAll('.scientists__item'));
let arrBtns = document.querySelectorAll('.scientists__btn');
let list = document.querySelector('.scientists__list');

const checkFilter = arr => {
  arrScientists.forEach(scientist => {
    

    arr.forEach(item => {
      if (scientist.textContent.includes(item.name)) {
        scientist.classList.add('scientists__active');
      }
    });
  });
};

arrBtns.forEach(btn => {
  arrScientists.forEach(scientist => {
    btn.addEventListener('click', () => {

      if (scientist.classList.contains('scientists__active')) {
        scientist.classList.remove('scientists__active');
      }
    
      if (scientist.classList.contains('scientists__hidden')) {
        scientist.classList.remove('scientists__hidden');
      }

      list.append(scientist);
      

      if (btn.dataset.action === 'show-19-scientist') {
        let filter = scientists.filter(item => item.born >= 1800 && item.born <= 1899);
        
        checkFilter(filter);
      }

      if (btn.dataset.action === 'show-date-birthday') {
        let filter = scientists.filter(item => item.name === 'Albert');        

        checkFilter(filter);
      }

      if (btn.dataset.action === 'find-by-first-letter') {
        let filter = scientists.filter(item => item.surname.startsWith('C'));   
        
        checkFilter(filter);
      }

      if (btn.dataset.action === 'delete-by-first-letter') {
        let filter = scientists.filter(item => item.name.startsWith('A'));   

        checkFilter(filter);
      }

      if (btn.dataset.action === 'find-scientists') {
        let arrYears = scientists.reduce((arr,item) => {
          arr.push(item.dead - item.born);
          return arr;
        },[]);

        let maxYears = Math.max(...arrYears);
        let minYears = Math.min(...arrYears);

        let filter = scientists.filter(item => item.dead - item.born === maxYears || item.dead - item.born === minYears);

        checkFilter(filter);   
      }

      if (btn.dataset.action === 'find-last-scientist') {
        let arrBirthYears = scientists.reduce((arr,item) => {
          arr.push(item.born);
          return arr;
        },[]);  
        
        let maxBirthYear = Math.max(...arrBirthYears);
        
        let filter = scientists.filter(item => item.born === maxBirthYear);

        checkFilter(filter);       
      }

      if (btn.dataset.action === 'find-by-name') {
        let arrS = scientists.reduce((arr,item) => {
          arr.push(item.name[0]);
          return arr;
        },[])

        arrS.forEach(letter => {
          let filter = scientists.filter(item => item.name.startsWith(letter) && item.surname.startsWith(letter));

          checkFilter(filter);
        })
      }
      if (btn.dataset.action === 'sort-by-alphavit') { 
        arrScientists.sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(item => {
          list.append(item);
        });
      }
      if (btn.dataset.action === 'sort-by-years') {
        // scientists.forEach(item => {

        // })


        
      }
  })
})
})

let modals = document.querySelectorAll('.modal-wrapped');
let modalCloseBtns = document.querySelectorAll('.modal__close');
let openModalBtns = document.querySelectorAll('#open-modal');

let inputEmail = document.querySelector('.footer__input');
let inputName = document.querySelector('.modal__input');
let submitBtn = document.querySelector('.modal__btn');
let user = document.querySelector('#username');

const toggleModal = modal => {
  modal.classList.toggle('modal-active');
}

modals.forEach(modal => {
  if (modal.dataset.modal = 'main') {
    document.body.style.overflowY = 'hidden';
  }
})

modalCloseBtns.forEach((closeBtn,i) => {
  closeBtn.addEventListener('click', () => {
    toggleModal(modals[i]);
    document.body.style.overflowY = 'scroll';
  });
});

submitBtn.addEventListener('click', () => {
  if (inputName.value.length > 0) {
    modals.forEach(modal => {
      modal.classList.remove('modal-active');
      document.body.style.overflowY = 'scroll';
    });
    
    user.textContent = inputName.value;
  }
})

openModalBtns.forEach((openBtn,i) => {
  openBtn.addEventListener('click', () => {
    if (openBtn.dataset.action === 'subscribe') {
      if (inputEmail.value.includes('@')) {
        toggleModal(modals[i]);
        document.body.style.overflowY = 'hidden';
      }
      else {
        inputEmail.style.border = '1px solid #990000';
        inputEmail.placeholder = 'заповніть поле'
      }
    }

    if (openBtn.dataset.action === 'regist') {
      if (user.textContent === 'User!') {
        toggleModal(modals[i]);
        document.body.style.overflowY = 'hidden';
      }
    }
  });
});

inputEmail.addEventListener('input', () => {
  if (!inputEmail.value.includes('@')) {
    inputEmail.style.border = '1px solid #990000';
  }
  else {
    inputEmail.style.border = 'none';
  }
  if (inputEmail.value.length === 0) {
    inputEmail.style.border = 'none';
  }
})

// let dinoBg = document.querySelector('.dino-game-wrapped');
// let dinoBody = document.querySelector('.dino-game__body');
// let dino = document.querySelector('.dino-game__dinosaur');
// let cactus = document.querySelector('.dino-game__cactus');
// let dinoBtn = document.querySelector('.dino-game__btn');
// let accD = 5;

// dinoBtn.addEventListener('click', () => {
//   dinoBtn.style.display = 'none';
// })

// dinoBody.addEventListener('click', () => {
//   console.log(accD);

//   accD += 5;

//   dinoBody.style.backgroundPositionX = `right,${1120}px`

//   console.log(accD);
  
// })
