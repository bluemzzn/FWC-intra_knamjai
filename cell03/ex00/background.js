
const button = document.getElementById('button');

function randomColor(){
    let symbols = '0123456789ABCDEF';
    let color = '#'
    for(let i = 0; i< 6;i++){
        color += symbols[Math.floor(Math.random() * 16)] // possibleility of hex code
    }

    return color;
}

button.addEventListener('click', function() {
    document.body.style.backgroundColor = randomColor();
});