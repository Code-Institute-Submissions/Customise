


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




