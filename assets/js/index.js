const countDate = new Date("2026-12-31T00:00:00").getTime();

let x = setInterval(()=> {
    const today = new Date().getTime();
    let distance = countDate - today;

    if (distance <= 0) {
        // Para a execução do setInterval (impede que rode para sempre)
        clearInterval(x);

        // Trava a exibição em 0
        document.getElementById('days').innerHTML = 0;
        document.getElementById('hours').innerHTML = 0;
        document.getElementById('minutes').innerHTML = 0;
        document.getElementById('seconds').innerHTML = 0;
    } else {
        let days = Math.floor(distance / (1000*60*60*24));
        let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        let seconds = Math.floor((distance % (1000*60))/(1000));

        document.getElementById('days').innerHTML = days
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds
    }
}, 1000);

