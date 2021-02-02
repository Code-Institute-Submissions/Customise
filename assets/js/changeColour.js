debugger;
 localStorage.setItem('colour', 'blue');

//  localStorage.setItem('btncolour', 'bluebtn');

//  localStorage.setItem('bordercolor', 'blue');

 function changecolorbtn() {

        let currentColour = "." + localStorage.getItem('colour', 'btncolour', 'bordercolor');
    
        console.log(currentColour);
    
        let findClass = document.querySelectorAll(currentColour)
    
        console.log(findClass);
    
        for (let el of findClass) {
            
                let currentColour = localStorage.getItem('colour')
                
                 $(el).removeClass(currentColour); $(el).addClass("red");
                 console.log(el)
             }
    
 }
 