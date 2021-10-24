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

  let greet;
  function getTimeOfDay(){
    const date1 = new Date();
    const hours = date1.getHours();
    
    // console.log(hours);

    if (hours >= 6 && hours < 12) {
      greet = "morning";
    } else if (hours >= 12 && hours < 18) {
      greet = "afternoon";
    } else if (hours >= 18 && hours < 24) {
      greet = "evening";
    } else {
      greet = "night";
    }
    
   // console.log(greet);
  }
  getTimeOfDay();


function showGreeting(){
 let greeting = document.querySelector('.greeting');
    greeting.textContent = `Good ${greet},`;
  
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





let rand = Math.floor(Math.random() * 21);
function getRandom() {
  
  //console.log(rand); 
}
getRandom();

function setBg(){
  
   rand = rand.toString().padStart(2, "0");
    
  //  console.log(rand);
    document.body.style.backgroundImage = `url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${greet}/${rand}.jpg")`;

  }
  setBg();



const prev = document.querySelector('.slide-prev'),
      next = document.querySelector('.slide-next');

function getSlideNext(){
  if (rand < 20) { 
    rand++;   
    setBg(rand);
  } else {
    rand = 1;
    setBg(rand);
  }        
    console.log(rand);
}
next.addEventListener('click', getSlideNext);

function getSlidePrev(){
  if (rand > 1) {     
    rand--;   
    setBg(rand);
  } else {
    rand = 20;
    setBg(rand);
  }        
    console.log(rand);
}
prev.addEventListener('click', getSlidePrev);

//getSlideNext();

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