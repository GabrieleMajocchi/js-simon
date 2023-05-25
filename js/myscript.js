
const clock = setInterval (countdown, 900, 26, 9, 30);


const title = document.querySelector('#title');
let counterdays = document.querySelector('.counter-day');
let counterhours = document.querySelector('.counter-hours');
let counterminutes = document.querySelector('.counter-minutes');
let counterseconds = document.querySelector('.counter-seconds');

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
        counterdays.innerHTML = missDay-1;
        counterhours.innerHTML = missHours;
        counterminutes.innerHTML = missMin;
        counterseconds.innerHTML = missSec;
    }else if (missDay <= 0){
        missHours = hours - date.getHours();
        missMin = minutes - date.getMinutes() - 1;
        missSec = 59 - date.getSeconds();
        if(missDay < 0 || missHours < 0 || missMin < 0){
            title.innerHTML = "<h1>E' l'ora della correzione</h1>";
            clearInterval(clock);
            counterdays.innerHTML = '0';
            counterhours.innerHTML = '0';
            counterminutes.innerHTML = '0';
            counterseconds.innerHTML = '0';
        }else{
            counterdays.innerHTML = missDay;
            counterhours.innerHTML = missHours;
            counterminutes.innerHTML = missMin;
            counterseconds.innerHTML = missSec;
        }
    }
    
}
