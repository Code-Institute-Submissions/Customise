
localStorage.setItem('colour', 'blue');

localStorage.setItem('btncolour', 'bluebtn');

localStorage.setItem('bordercolour', 'bluebr');

// ------------------------------------------------------------ change to red

function changecolorbtnred() {

    debugger;

    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    let currentBrColour = "." + localStorage.getItem('bordercolour');

    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

    let findBrClass = document.querySelectorAll(currentBrColour)

    console.log(findClass, findBtnClass);

    for (let el of findClass) {

        let currentColour = localStorage.getItem('colour')

        $(el).removeClass(currentColour); $(el).addClass("red");
        console.log(el)

        console.log(currentColour);

    }

    localStorage.setItem('colour', 'red');

    for (let el of findBtnClass) {

        let currentBtnColour = localStorage.getItem('btncolour');

        $(el).removeClass(currentBtnColour); $(el).addClass("redbtn");
        console.log(el);


    }

    localStorage.setItem('btncolour', 'redbtn');

    for (let el of findBrClass) {

        let currentBrColour = localStorage.getItem('bordercolour')

        $(el).removeClass(currentBrColour); $(el).addClass("redbr");
        console.log(el)

        console.log(currentBrColour);

    }

    localStorage.setItem('bordercolour', 'redbr');


}


// ------------------------------------------------------------ change to blue


function changecolorbtnblue() {

    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    let currentBrColour = "." + localStorage.getItem('bordercolour');


    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

    let findBrClass = document.querySelectorAll(currentBrColour)

    console.log(findClass, findBtnClass);

    for (let el of findClass) {

        let currentColour = localStorage.getItem('colour')

        $(el).removeClass(currentColour); $(el).addClass("blue");
        console.log(el)

        console.log(currentColour);

    }

    localStorage.setItem('colour', 'blue');

    for (let el of findBtnClass) {

        let currentBtnColour = localStorage.getItem('btncolour');

        $(el).removeClass(currentBtnColour); $(el).addClass("bluebtn");
        console.log(el);


    }

    localStorage.setItem('btncolour', 'bluebtn');

    for (let el of findBrClass) {

        let currentBrColour = localStorage.getItem('bordercolour');

        $(el).removeClass(currentBrColour); $(el).addClass("bluebr");
        console.log(el);


    }

    localStorage.setItem('bordercolour', 'bluebr');


}


// ------------------------------------------------------------ change to purple


function changecolorbtnpurple() {

    
    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    let currentBrColour = "." + localStorage.getItem('bordercolour');

    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

    let findBrClass = document.querySelectorAll(currentBrColour)

    console.log(findClass, findBtnClass);

    for (let el of findClass) {

        let currentColour = localStorage.getItem('colour')

        $(el).removeClass(currentColour); $(el).addClass("purple");
        console.log(el)

        console.log(currentColour);

    }

    localStorage.setItem('colour', 'purple');

    for (let el of findBtnClass) {

        let currentBtnColour = localStorage.getItem('btncolour');

        $(el).removeClass(currentBtnColour); $(el).addClass("purplebtn");
        console.log(el);


    }

    localStorage.setItem('btncolour', 'purplebtn');

    for (let el of findBrClass) {

        let currentBrColour = localStorage.getItem('bordercolour')

        $(el).removeClass(currentBrColour); $(el).addClass("purplebr");
        console.log(el)

        console.log(currentColour);

    }

    localStorage.setItem('bordercolour', 'purplebr');


}


// ------------------------------------------------------------ change to green


function changecolorbtngreen() {

    debugger;

    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    let currentBrColour = "." + localStorage.getItem('bordercolour');

    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

    let findBrClass = document.querySelectorAll(currentBrColour)

    console.log(findClass, findBtnClass);

    for (let el of findClass) {

        let currentColour = localStorage.getItem('colour')

        $(el).removeClass(currentColour); $(el).addClass("green");
        console.log(el)

        console.log(currentColour);

    }

    localStorage.setItem('colour', 'green');

    for (let el of findBtnClass) {

        let currentBtnColour = localStorage.getItem('btncolour');

        $(el).removeClass(currentBtnColour); $(el).addClass("greenbtn");
        console.log(el);


    }

    localStorage.setItem('btncolour', 'greenbtn');


    for (let el of findBrClass) {

        let currentBrColour = localStorage.getItem('bordercolour')

        $(el).removeClass(currentBrColour); $(el).addClass("greenbr");
        console.log(el)

        console.log(currentColour);

    }

    localStorage.setItem('bordercolour', 'greenbr');


}


