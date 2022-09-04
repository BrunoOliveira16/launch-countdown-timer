const daysCard = document.getElementById('days');
const hoursCard = document.getElementById('hours');
const minutesCard = document.getElementById('minutes');
const secondsCard = document.getElementById('seconds');
let time = {'days': 30, 'hours': 0, 'minutes': 0, 'seconds': 0}, finished = false;

let count = setInterval(() =>{
    
    updateScreenTime();
    updateTime()

    if(finished) clearInterval(count);
},1000);

// Função de contagem
function updateTime(){

    if(time.seconds > 0)time.seconds--
    else{
        time.seconds = 59;
        if(time.minutes > 0)time.minutes--
        else{
            time.minutes = 59;
            if(time.hours > 0)time.hours--
            else{
                time.hours = 23;
                if(time.days > 0)time.days--
                else finished = true;
            }
        }
    }
};

// Função para atualizar o tempo na tela
function updateScreenTime(){

    document.querySelectorAll('.box').forEach(e=>{

        const bottomTxt = e.querySelector('.card.bottom p'), value = time[e.id]+1;
        if(value == bottomTxt.innerText)return;

        const front = e.querySelector('.card.front'), frontTxt = front.querySelector('p');
        const topTxt = e.querySelector('.card.top p');

        topTxt.innerText = value - 1, 
        frontTxt.innerText = value, 
        bottomTxt.innerText = value;

        turnAnimation(front, value, frontTxt, 0.5);
    });
};

// Função para mostrar o contador na tela
function turnAnimation(local, value, txt, duration){
    local.style.animation = '', txt.classList = '';
    setTimeout(()=> local.style.animation = `turn ${duration}s forwards`, 30);
    setTimeout(()=> {txt.innerText = value-1, txt.classList = 'flip'}, (duration*1000)/3);
}