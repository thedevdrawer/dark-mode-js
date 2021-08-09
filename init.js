const __switch = document.querySelector('input[type="checkbox"]');
const __icon = document.getElementById("toggle-icon");
const __img = document.querySelectorAll("img");

function dark(){
    for ( var i = __img.length; i--; ) {
        __img[i].classList.add("img-light");
    }
    __icon.children[0].classList.replace("bi-sun-fill", "bi-moon-fill");
}

function light() {
    for ( var i = __img.length; i--; ) {
        __img[i].classList.remove("img-light");
    }
    __icon.children[0].classList.replace("bi-moon-fill", "bi-sun-fill");
}

function switcher(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("theme", "dark");
        dark();
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem("theme");
        light();
    }
}

__switch.addEventListener("change", switcher);

const __currentTheme = localStorage.getItem("theme");

if(__currentTheme){
    document.documentElement.setAttribute('data-theme', __currentTheme);
    if(__currentTheme == "dark"){
        __switch.checked = true;
        dark();
    }
}