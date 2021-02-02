
localStorage.setItem('colour', 'blue');

localStorage.setItem('btncolour', 'bluebtn');

//  localStorage.setItem('bordercolor', 'blue');

function changecolorbtn() {
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

    }

    for (let el of findBtnClass) {

        let currentBtnColour = localStorage.getItem('btncolour');

        $(el).removeClass(currentBtnColour); $(el).addClass("redbtn");
        console.log(el)
    }
}
