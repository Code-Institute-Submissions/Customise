
localStorage.setItem('colour', 'blue');

localStorage.setItem('btncolour', 'bluebtn');

//  localStorage.setItem('bordercolor', 'blue');

// ------------------------------------------------------------ change to red

function changecolorbtnred() {

    debugger;
    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

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


}


// ------------------------------------------------------------ change to blue


function changecolorbtnblue() {

    debugger;
    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

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


}


// ------------------------------------------------------------ change to purple


function changecolorbtnpurple() {

    debugger;
    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

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


}


// ------------------------------------------------------------ change to green


function changecolorbtngreen() {

    debugger;
    
    let currentColour = "." + localStorage.getItem('colour');

    let currentBtnColour = "." + localStorage.getItem('btncolour');

    console.log(currentColour, currentBtnColour);

    let findClass = document.querySelectorAll(currentColour)

    let findBtnClass = document.querySelectorAll(currentBtnColour)

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


}


