const ball = document.getElementById("ball");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
const click = document.getElementById("button");
let interval;
let second = 160;
let timer_number = 20;
let counter = 0;

const scoreCounter = () =>{
    counter++
    score.textContent = "HAHA " + counter
    timer_number += 4;
}
click.addEventListener("click" , () =>{
    click.setAttribute("disabled" , "")
    ball.addEventListener("click", ballFunction);
    interval = setInterval(timerFunction , second)
})

function ballFunction(){
    const randomX = Math.floor(Math.random() * 80);
    const randomY = Math.floor(Math.random() * 70);
    timer.textContent = "Timer " + timer_number;
    let size = Math.floor(Math.random() * 100)
    ball.style.marginLeft = `${randomX}%`
    ball.style.marginTop = `${randomY}%`
    if(size <= 10){
        size = 15;
        ball.style.width = `${size}px`
        ball.style.height = `${size}px`
    }
    ball.style.width = `${size}px`
    ball.style.height = `${size}px`
    //score
    scoreCounter();
}

function timerFunction(){
    timer_number--
    timer.textContent = "Timer " + timer_number;
    if(timer_number === 0){
        ball.removeEventListener("click", ballFunction)
        clearInterval(interval);
        Swal.fire({
            title: 'გილოცავ <3',
            text: 'შენი ყველა პაროლი ჩემს ხელშია მმმმ <3',
            imageUrl: 'https://dazedimg-dazedgroup.netdna-ssl.com/1132/azure/dazed-prod/1290/3/1293498.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        document.body.classList.remove("swal2-height-auto");
        timer_number = 20;
        counter = 0;
        score.textContent = "HAHA " + counter
        click.removeAttribute("disabled", '')
    }
}