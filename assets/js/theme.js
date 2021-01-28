
const btn = document.querySelector(".colorChange");

const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function() {
  
  if (theme.getAttribute("href") == "assets/css/lightTheme.css") {
    
    theme.href = "assets/css/darkTheme.css";
  
  } else {
    
    theme.href = "assets/css/lightTheme.css";
  }
});