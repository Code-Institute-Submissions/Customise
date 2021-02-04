


const btn = document.querySelector(".colorChange");

const theme = document.querySelector("#theme-link");




let lsTheme = localStorage.getItem('theme');

if (lsTheme == '') {
  localStorage.setItem('theme', 'assets/css/light-theme.css');

}

theme.href = localStorage.getItem('theme');


btn.addEventListener("click", function() {

  
  if (theme.getAttribute("href") == 'assets/css/light-theme.css') {

    localStorage.setItem('theme', 'assets/css/dark-theme.css');
    
    theme.href = localStorage.getItem('theme');

  
  } else {
    
    localStorage.setItem('theme', 'assets/css/light-theme.css');

    theme.href = localStorage.getItem('theme');

    console.log(lsTheme);

  }
});




