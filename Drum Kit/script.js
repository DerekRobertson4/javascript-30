function removeTransition(event) {
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
    console.log(this)
}

 function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.key}"]`);
    const key = document.querySelector(`.drumpad[data-key="${event.key}"]`);
    if (!audio) return;
    
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();   
};

//Get ALL radio button elements
const radioButtons = document.getElementsByName("drumkit")
//Iterate through RB's and listen for click event.
radioButtons.forEach(elem => {
    //When click happens, set currVal to RB value.
    elem.addEventListener('click', function(event) {
        const currVal = event.target.value;
        //With the RB value, set audio src to proper path.
        const audioFiles = document.querySelectorAll('audio')
        audioFiles.forEach(elem => {
            const originalPath = elem.getAttribute('src');
            const newPath = originalPath
            .replace(/kit[A-Z]/, `kit${currVal}`);
            elem.setAttribute('src', newPath);
        })
    })
});

const keys = document.querySelectorAll('.drumpad');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

