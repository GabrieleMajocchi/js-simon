
const clock = setInterval (countdown, 900, 26, 9, 30);

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
    if(missDay === 1){
        missHours = 24 - date.getHours();
        missMin = 60 - date.getMinutes();
        missSec = 60 - date.getSeconds();
    }else if (missDay === 0){
        missHours = hours - date.getHours();
        missMin = minutes - date.getMinutes();
        missSec = 59 - date.getSeconds();
        if(missDay === 0 && missHours === 0 && missMin === 0 && missSec === 0){
            console.log('FINITOOOOO IL COUNTDOWN!!!');
            clearInterval(clock);
        }
    }
    console.log(missDay, missHours, missMin, missSec)
}