let storedColor = localStorage.getItem('colour');

if(!storedColor) {
    storedColor = 'blue';
    localStorage.setItem('colour', 'blue');
}

let currentColour = 'blue';

function changeColor(color) {
    let findClass = document.querySelectorAll(`.${currentColour}`);
    let findBtnClass = document.querySelectorAll(`.${currentColour}btn`);
    let findBrClass = document.querySelectorAll(`.${currentColour}br`);

    for (let el of findClass) {
        $(el).removeClass(currentColour);
        $(el).addClass(color);
    }

    for (let el of findBtnClass) {
        $(el).removeClass(currentColour + 'btn');
        $(el).addClass(color + 'btn');
    }

    for (let el of findBrClass) {
        $(el).removeClass(currentColour + 'br');
        $(el).addClass(color + 'br');
    }

    localStorage.setItem('colour', color);
    currentColour = color;
}

changeColor(storedColor);

