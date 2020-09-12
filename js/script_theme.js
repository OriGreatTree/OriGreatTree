var btn = document.getElementById("theme-button");
var link = document.getElementById("night");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "assets/css/theme/White_theme.css";
    let darkTheme ="assets/css/theme/Dark_theme.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == darkTheme)
    {
   	 currTheme = lightTheme;
   	 theme = "White";
    }
    else
    {    
   	 currTheme = darkTheme;
   	 theme = "Dark";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}