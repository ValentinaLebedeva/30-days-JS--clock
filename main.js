const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    //getiing hours
    const hours = now.getHours();
    const hoursDeg = ((hours / 60) * 360) + 90;

    //getting minutes 
    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;

    //getting seconds
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;

    // setting style rotation
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(setDate, 1000);