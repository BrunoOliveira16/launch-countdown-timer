const countDate = new Date("sep 30, 2022 12:09:35").getTime();

let x = setInterval(()=> {

    const today = new Date().getTime();

    let distance = countDate - today;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
    let seconds = Math.floor((distance % (1000*60))/(1000));

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML = minutes
    document.getElementById('seconds').innerHTML = seconds
}, 1000);

