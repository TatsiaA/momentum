/* Часы и календарь */

 function showTime(){
    window.setInterval(
     function showTime(){
         const date = new Date();
         const currentTime = date.toLocaleTimeString();
         const options = {weekday: 'long', month: 'long', day: 'numeric'};
         const currentDate = date.toLocaleDateString('en-Br', options);
         
         document.getElementById("clock").innerHTML = currentTime;
         document.getElementById("currentdate").innerHTML = currentDate;

    }
   , 1000);
 }  
showTime();

/* Greeting */

function showGreeting(){
  const date1 = new Date();
  const hours = date1.getHours();
  
 // console.log(hours);
  function getTimeOfDay(){
    let greet;
    
    if (hours >= 6 && hours < 12) {
      greet = "Good morning,";
    } else if (hours >= 12 && hours < 18) {
      greet = "Good afternoon,";
    } else if (hours >= 18 && hours < 24) {
      greet = "Good evening,";
    } else {
      greet = "Good night,";
    }
    let greeting = document.querySelector('.greeting');
    greeting.textContent = greet;
   // console.log(greet);
  }
  getTimeOfDay();
}
showGreeting();


const yourname = document.querySelector('.name');
function setLocalStorage() {
  localStorage.setItem('name', yourname.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('name')) {
    yourname.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);

/* Change backgrounds*/

body.style.backgroundImage = "url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/18.jpg')";

function getRandom(min, max) {
  min = Math.ceil(1);
  max = Math.floor(21);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(max)
getRandom();



/* Change language */
/*
let text = document.querySelector('.quote');
let author = document.querySelector('.author');
let quoteBtn = document.querySelector('.change-quote');

async function getQuotes(){
  let quotes;
 // console.log(language);

  if (language == 'en'){
    quotes = './data/quotes-en.json';
  }

  if (language == 'ru'){
    quotes = './data/quotes-ru.json';
  }

  const res = await fetch(quotes);
  const data = await res.json();
  let randomQuote = randomIntFromInterval(1, 102);

  text.textContent = `${data.quotes[randomQuote].text}`;
  author.textContent = `${data.quotes[randomQuote].author}`;

}

document.addEventListener('DOMContentLoaded', getQuotes);
console.log(language);

quoteBtn.addEventListener('click', getQuotes);


/*
window.addEventListener('load', () => {
  getQuotes(language)
})

changeQuoteBtn.addEventListener('click', () => {
  getQuotes(language)
})
*/