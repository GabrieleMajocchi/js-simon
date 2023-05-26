
const when = parseInt(prompt('Scrivi il numero del giorno di questo mese nel quale vuoi mettere il countdown:'));
const hour = parseInt(prompt("Scrivi l'ora nel quale vuoi mettere il countdown:"));
const min = parseInt(prompt("Scrivi il minuto nel quale vuoi mettere il countdown:"));

const clock = setInterval (countdown, 850, when, hour, min);

const music = document.querySelector('.music');
const title = document.querySelector('#title');
let counterdays = document.querySelector('.counter-day');
let counterhours = document.querySelector('.counter-hours');
let counterminutes = document.querySelector('.counter-minutes');
let counterseconds = document.querySelector('.counter-seconds');
let startmusic = 0;
let startfinal = 0;
let startcountdown = 0;

/**
 * Function that give you a countdown from now untill the day, hour and minutes you choose
 * @param {number} datenumber The number of the day where will finish the countdown
 * @param {number} hours The hours of the day where will finish the countdown
 * @param {numer} minutes The minutes of the day where will finish the countdown
 */
function countdown (datenumber, hours, minutes){
    const date = new Date();
    let missDay = datenumber - date.getDate();
    let missHours;
    let missMin;
    let missSec;
    if(missDay >= 1){
        missHours= (24 - date.getHours())+hours -1;
        missMin = (60 - date.getMinutes())+minutes -1;
        if(missMin >= 60){
            missMin = missMin - 60;
            missHours = missHours + 1;
        }
        missSec = 60 - date.getSeconds();
        print();
        counterdays.innerHTML = missDay-1;
    }else if (missDay <= 0){
        missHours = hours - date.getHours();
        missMin = minutes - date.getMinutes() - 1;
        missSec = 59 - date.getSeconds();
        if(missHours <= 0 && missMin < 0){
            title.innerHTML = "<h1>E' l'ora della correzione</h1>";
            startmusic = 1;
            music.innerHTML = '<audio hidden controls autoplay id="myAudio"> <source src= "win.mp3" type="audio/mpeg"> </audio>';
            clearInterval(clock);
            counterdays.innerHTML = '0';
            counterhours.innerHTML = '0';
            counterminutes.innerHTML = '0';
            counterseconds.innerHTML = '0';
        }else if(startfinal === 0 && missHours <= 0 && missMin < 5){
            music.innerHTML = '<audio hidden controls autoplay id="myAudio"> <source src= "finalcountdown.mp3" type="audio/mpeg"> </audio>';
            startmusic = 1;
            startfinal = 1;
            print();
        }else if(startcountdown === 0 && missHours <= 0 && missMin <= 0 && missSec <= 11){
            music.innerHTML = '<audio hidden controls autoplay id="myAudio"> <source src= "sec.mp3" type="audio/mpeg"> </audio>';
            startmusic = 1;
            startcountdown = 1;
            print();
        }else{
            print();
        }
    }

    if(startmusic === 0){
        music.innerHTML = '<audio hidden controls loop autoplay id="myAudio"> <source src= "skyfall.mp3" type="audio/mpeg"> </audio>';
        startmusic = 1;
    }

    function print (){
        counterdays.innerHTML = missDay;
        counterhours.innerHTML = missHours;
        counterminutes.innerHTML = missMin;
        counterseconds.innerHTML = missSec;
    }
}


