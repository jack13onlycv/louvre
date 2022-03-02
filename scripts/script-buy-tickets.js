const closeButtonBuyTickets = document.querySelector(".ticket-form-close")
const openButtonBuyTickets = document.querySelector(".tickets-amount-button")
const formBuyTickets = document.querySelector(".ticket-form")
const buttonBuyTickets = document.querySelector(".tickets-buy-book")
const rippleButton = document.querySelector(".ripple-circle")

const basicPriceButton = document.querySelectorAll('.basic-price-button')
const seniorPriceButton = document.querySelectorAll('.senior-price-button')

const basicPrice = document.querySelectorAll('.basic-price')
const seniorPrice = document.querySelectorAll('.senior-price')

const ticketsAmountTotal = document.querySelector('.tickets-amount-total')
const ticketsFormTotal = document.querySelector('.ticket-price-total-sum')

const ticketPriceCounterBasic = document.querySelector('.ticket-price-counter-basic')
const ticketPricebasicRight = document.querySelector('.ticket-price-basic-right')
const ticketPriceCounterSenior = document.querySelector('.ticket-price-counter-senior')
const ticketPriceSeniorRight = document.querySelector('.ticket-price-senior-right')
const ticketPriceOfficialBasic = document.querySelector('.ticket-price-official-basic')
const ticketPriceOfficialSenior = document.querySelector('.ticket-price-official-senior')

const ticketTypeSelect = document.querySelector('.medium-form.select')
const ticketTypeSelectRadio = document.getElementsByName('radio')

const inputName = document.querySelector('.medium-form.name')
const inputEmail = document.querySelector('.medium-form.email')
const inputPhone = document.querySelector('.medium-form.phone')
const inputDate = document.querySelector('.little-form.time')
const inputDateY = document.querySelector('.little-form.date')
const changingTicketType = document.querySelector('.changing-ticket-type')

let ripplePlay = 0
let basicTotalCounter = 1
let seniorTotalCounter = 1
let ticketPrice = 20

let totalSumCounter = 0;

checkSavedTickets()
recalculateSum()

const openCloseBuyTickets = () => {
  formBuyTickets.classList.toggle('ticket-buy-hidden')
  formBuyTickets.classList.toggle("open-buy-tickets")
}

openButtonBuyTickets.addEventListener("click", openCloseBuyTickets)
closeButtonBuyTickets.addEventListener("click", openCloseBuyTickets)

document.addEventListener('click', function(e) {
  if (e.target.classList.contains("ticket-form")) {
    openCloseBuyTickets()
  }
})

buttonBuyTickets.addEventListener('click', function(e) {
  e.preventDefault()
  if (!ripplePlay) {
    ripplePlay = 1
    rippleButton.style.top = `${e.offsetY}px`
    rippleButton.style.left = `${e.offsetX}px`
    rippleButton.classList.add('ripple')
    rippleButton.addEventListener("animationend", () => {
      rippleButton.classList.remove('ripple')
      ripplePlay = 0
    })
  }
})


basicPriceButton.forEach(item => item.addEventListener('click', () => {
  item.classList.contains('button-lower') ? basicPriceCount('lower') : basicPriceCount('higher')
}))

seniorPriceButton.forEach(item => item.addEventListener('click', () => {
  item.classList.contains('button-lower') ? seniorPriceCount('lower') : seniorPriceCount('higher')
}))


const basicPriceCount = (direction) => {
  
  if (direction === 'lower') {
    basicTotalCounter === 0 ? basicTotalCounter : basicTotalCounter--
    basicPrice.forEach(item => {
      item.value = basicTotalCounter
    })
  } else {
    basicTotalCounter === 20 ? basicTotalCounter : basicTotalCounter++
    basicPrice.forEach(item => {
      item.value = basicTotalCounter
    })
  }
  recalculateSum()
  writeSavedTickets()
}

const seniorPriceCount = (direction) => {
  
  if (direction === 'lower') {
    seniorTotalCounter === 0 ? seniorTotalCounter : seniorTotalCounter--
    seniorPrice.forEach(item => {
      item.value = seniorTotalCounter
    })
  } else {
    seniorTotalCounter === 20 ? seniorTotalCounter : seniorTotalCounter++
    seniorPrice.forEach(item => {
      item.value = seniorTotalCounter
    })
  }
  recalculateSum()
  writeSavedTickets()
}

function totalSum() {
  totalSumCounter = basicTotalCounter * ticketPrice + seniorTotalCounter * ticketPrice / 2
  ticketsAmountTotal.innerHTML = `Total € ${totalSumCounter}`
  ticketsFormTotal.innerHTML = `${totalSumCounter} €`
}

function basicSum() {
  ticketPriceCounterBasic.innerHTML = basicTotalCounter
  ticketPricebasicRight.innerHTML = `${basicTotalCounter * ticketPrice} €` 
}

function seniorSum() {
  ticketPriceCounterSenior.innerHTML = seniorTotalCounter
  ticketPriceSeniorRight.innerHTML = `${seniorTotalCounter * ticketPrice / 2} €` 
}

ticketTypeSelect.addEventListener("change", (item) => {
  ticketPrice = ticketTypeSelect.value
  ticketPriceOfficialBasic.innerHTML = `${ticketPrice}`
  ticketPriceOfficialSenior.innerHTML = `${ticketPrice / 2}`
  ticketTypeSelectRadio.forEach(priceRadioButton => {
    if (priceRadioButton.value === ticketPrice) priceRadioButton.checked = 'checked'
  })
  recalculateSum()
  writeSavedTickets()
});

ticketTypeSelectRadio.forEach(priceRadioButton => {
  priceRadioButton.addEventListener("change", () => {
    ticketPrice = priceRadioButton.value
    ticketPriceOfficialBasic.innerHTML = `${ticketPrice}`
    ticketPriceOfficialSenior.innerHTML = `${ticketPrice / 2}`
    ticketTypeSelect.value = priceRadioButton.value
    recalculateSum()
    writeSavedTickets()
  });
})

function recalculateSum() {
  totalSum()
  basicSum()
  seniorSum()
  changingTicketRight()
}

function changingTicketRight () {
  if (ticketPrice === '20') {
    changingTicketType.innerHTML = 'Permanent exhibition'
  } else if (ticketPrice === '25') {
    changingTicketType.innerHTML = 'Temporary exhibition'
  } else {
    changingTicketType.innerHTML = 'Combined Admission'
  }
}

function writeSavedTickets() {
    localStorage.setItem('basicTotalCounter13', basicTotalCounter)
    localStorage.setItem('seniorTotalCounter13', seniorTotalCounter)
    localStorage.setItem('ticketPrice13', ticketPrice)
}


function checkSavedTickets() {
  if (localStorage.getItem('basicTotalCounter13')) {
    basicTotalCounter = localStorage.getItem('basicTotalCounter13')
    seniorTotalCounter = localStorage.getItem('seniorTotalCounter13')
    ticketPrice = localStorage.getItem('ticketPrice13')
    ticketTypeSelect.value = ticketPrice
    ticketTypeSelectRadio.forEach(priceRadioButton => {
      if (priceRadioButton.value === ticketPrice) priceRadioButton.checked = 'checked'
    })
    ticketPriceOfficialBasic.innerHTML = `${ticketPrice}`
    ticketPriceOfficialSenior.innerHTML = `${ticketPrice / 2}`
    recalculateSum()
    basicPrice.forEach(item => {
      item.value = basicTotalCounter
    })
    seniorPrice.forEach(item => {
      item.value = seniorTotalCounter
    })
  }
}

inputName.addEventListener('input', validateName)

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz абвгдеёжзийклмнопрстуфхцчшщъыьэюя АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'

function validateName () {

  let validNameCounter = 0
  if (inputName.value.length === 0) {
    inputName.classList.remove('invalid-red')
    checkInvalidForPopup()
    return
  } 
  if (inputName.value.length < 3 || inputName.value.length > 15) {
    inputName.classList.add('invalid-red')
  } else {
    inputName.classList.remove('invalid-red')
  
    for (let i = 0; i < inputName.value.length; i++) {
        
      if (!alphabet.includes(inputName.value[i])) {
        inputName.classList.add('invalid-red')
      } else {
        validNameCounter++ 
      }
      if (validNameCounter === inputName.value.length) inputName.classList.remove('invalid-red')
    }
  }
  checkInvalidForPopup()
}

const alphabetEmail = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@_-1234567890.'

inputEmail.addEventListener('input', validateEmail) 

function validateEmail () {

  checkInvalidForPopup()

  if (inputEmail.value.length < 1) {
    inputEmail.classList.remove('invalid-red')
    checkInvalidForPopup()
    return
  }

  let validEmailCounter = 0
  let validEmailCounter2 = 0
  let validEmailCounter3 = 0
  let emailArr = inputEmail.value.split('@')
  

  if (emailArr.length < 2) {
    inputEmail.classList.add('invalid-red')
    checkInvalidForPopup()
    return
  }

  let emailArrTwo = emailArr[1].split('.')

  if (emailArrTwo.length < 2) {
    inputEmail.classList.add('invalid-red')
    checkInvalidForPopup()
    return
  }

  for (let i = 0; i < inputEmail.value.length; i++) {
    if (alphabetEmail.includes(inputEmail.value[i])) {
      validEmailCounter++ 
    }    
  }


  if (typeof emailArrTwo[0] !== 'string' || typeof emailArrTwo[1] !== 'string') {
    inputEmail.classList.add('invalid-red')
    return
  }
  

  for (let i = 0; i < emailArrTwo[0].length; i++) {
    if (alphabet.includes(emailArrTwo[0][i])) {
      validEmailCounter2++ 
    }    
  }

  for (let i = 0; i < emailArrTwo[1].length; i++) {
    if (alphabet.includes(emailArrTwo[1][i])) {
      validEmailCounter3++ 
    }    
  }

  if (validEmailCounter !== inputEmail.value.length || validEmailCounter2 !== emailArrTwo[0].length || validEmailCounter3 !== emailArrTwo[1].length) {
  // if (validEmailCounter !== inputEmail.value.length) {
    inputEmail.classList.add('invalid-red')
  } else if (!inputEmail.value.includes('@') || !inputEmail.value.includes('.') || inputEmail.value.indexOf('@') !== inputEmail.value.lastIndexOf('@')) {
    inputEmail.classList.add('invalid-red')
  } else if (emailArr[0].length > 15 || emailArr[0].length < 3 || emailArrTwo[0].length < 4 || emailArrTwo[1].length < 2) {
    inputEmail.classList.add('invalid-red')
  } else {
    inputEmail.classList.remove('invalid-red')
  }

  checkInvalidForPopup()
}

inputPhone.addEventListener('input', validatePhone) 

const numbersValidate = '0123456789 -'

function validatePhone () {
  let validPhoneCounter = 0
  let validPhoneNumbersCounter = 0

  for (let i = 0; i < inputPhone.value.length; i++) {
    if (!numbersValidate.includes(inputPhone.value[i])) {
      inputPhone.classList.add('invalid-red')
    } else {
      validPhoneCounter++ 
      if (!(inputPhone.value[i] === ' ' || inputPhone.value[i] === '-')) validPhoneNumbersCounter++
    }
  }
  if (validPhoneCounter === inputPhone.value.length) inputPhone.classList.remove('invalid-red')
  if (validPhoneNumbersCounter > 10) inputPhone.classList.add('invalid-red')

  checkInvalidForPopup()
}

const invalidErrorPopUp = document.querySelector('.invalid-error')

function checkInvalidForPopup () {
  if ([inputPhone, inputEmail, inputName].some(item => item.classList.contains('invalid-red'))) invalidErrorPopUp.style.opacity = '1'
  else invalidErrorPopUp.style.opacity = '0'
}

inputDate.addEventListener('change', validateDate)

function validateDate () {
  console.log(inputDate.value);
  let timeHoursMinutes = inputDate.value.split(':')
  if (+timeHoursMinutes[0] < 9) {
    inputDate.value = `09:00`
    timeHoursMinutes[0] = '09'
  }
  if (+timeHoursMinutes[0] > 18) {
    inputDate.value = '18:00'
    timeHoursMinutes[0] = '18'
  }
  if (!(+timeHoursMinutes[1] === 0 || +timeHoursMinutes[1] === 30)) {
    inputDate.value = `${timeHoursMinutes[0]}:00`
  }
  if (+timeHoursMinutes[0] === 18 && +timeHoursMinutes[1] !== 0) inputDate.value = '18:00'
  document.querySelector('.changing-ticket-date').innerHTML = inputDate.value
}

inputDateY.addEventListener('focus', () => {
  let dateToday = new Date()
  inputDateY.setAttribute('type', 'date')
  inputDateY.setAttribute('min', `${dateToday.getFullYear()}-${dateToday.getMonth()+1}-${dateToday.getDate()}`)
  inputDateY.setAttribute('max', '2021-12-31')
})

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednes­day', 'Thursday', 'Friday', 'Saturday']

inputDateY.addEventListener('change', () => {
  let checkDateToday = new Date(inputDateY.value)
  let dateToday = new Date()
  if (checkDateToday.getMonth() < dateToday.getMonth()){
     inputDateY.value = `${dateToday.getFullYear()}-${dateToday.getMonth()+1}-${dateToday.getDate()}`
  } else if (checkDateToday.getMonth() === dateToday.getMonth() && checkDateToday.getDate() < dateToday.getDate()) {
    inputDateY.value = `${dateToday.getFullYear()}-${dateToday.getMonth()+1}-${dateToday.getDate()}`
  }
  
  let dateVisiting = new Date(inputDateY.value)
  document.querySelector('.changing-ticket-visiting-date').innerHTML = `${day[dateVisiting.getDay()]}, ${month[dateVisiting.getMonth()]} ${dateVisiting.getFullYear()}`
})

inputDate.addEventListener('focus', () => {
  inputDate.setAttribute('type', 'time')
  inputDate.setAttribute('list', 'available-time')
})

const ticketsPicture = document.querySelector('.tickets-picture > img')

let prevPicCheck = 1;

function randomPicTickets() {
  let rand = Math.floor(1 + Math.random() * 5)
  rand === prevPicCheck ? rand = Math.floor(1 + Math.random() * 5) : rand = rand
  prevPicCheck = rand
  return rand;
}

function ticketsPictureChanger () {
  ticketsPicture.classList.add('tickets-picture-hidden')
  setTimeout(() => {
    ticketsPicture.setAttribute('src', `./assets/img/tickets-section-picture/tickets-section-picture-${randomPicTickets()}.jpg`)
  }, 1000)
  setTimeout(() => {
    ticketsPicture.classList.remove('tickets-picture-hidden')
  }, 2000)
}

setInterval(ticketsPictureChanger, 8000)