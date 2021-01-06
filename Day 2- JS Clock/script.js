function moveHands() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    if (secondsDeg === 90) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }

    const minutes = now.getMinutes();
    const minutesDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    if (minutesDeg === 90) {
        minuteHand.style.transition = 'none';
    } else {
        minuteHand.style.transition = '';
    }
    
    const hours = now.getHours();
    const hoursDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    
    if (hoursDeg === 90) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transition = '';
    }
}
const allHands = document.querySelectorAll('.hand');
const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

setInterval(moveHands, 1000);
