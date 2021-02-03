// let lsTheme = localStorage.getItem('theme');

// if (lsTheme === "" ){
//   localStorage.setItem('theme', 'white');
// }

// const btn = document.querySelector(".colorChange");

// const theme = document.querySelector("#theme-link");




// if (localStorage.getItem('theme', 'black')){

//   theme.href = "assets/css/darkTheme.css";
  
//   localStorage.setItem('theme', 'black');
// } else {
//   localStorage.setItem('theme', 'white');
// }


// btn.addEventListener("click", function() { 

//   debugger;

//   let color = localStorage.getItem('theme');

  
//   if (theme.getAttribute("href") == "assets/css/lightTheme.css" && color == "white") {
    
//     theme.href = "assets/css/darkTheme.css";

//     localStorage.setItem('theme', 'black');

//   } else  if (color == "black"){
    
//     theme.href = "assets/css/lightTheme.css";

//     localStorage.setItem('theme', 'white');

//   }
// });


const btn = document.querySelector(".colorChange");

const theme = document.querySelector("#theme-link");




let lsTheme = localStorage.getItem('theme')

if (lsTheme == '') {
  localStorage.setItem('theme', 'assets/css/lightTheme.css');

}

theme.href = localStorage.getItem('theme');

 


btn.addEventListener("click", function() {

  debugger;

  console.log(lsTheme)
  
  if (theme.getAttribute("href") == 'assets/css/lightTheme.css') {

    localStorage.setItem('theme', 'assets/css/darkTheme.css')
    
    theme.href = localStorage.getItem('theme');

  
  } else {
    
    localStorage.setItem('theme', 'assets/css/lightTheme.css');

    theme.href = localStorage.getItem('theme');

    console.log(lsTheme)

  }
});

// function removebtn() {
//     document.get
// }


