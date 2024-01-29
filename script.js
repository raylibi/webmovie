var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src= "sun.png";
    }
    else{
        icon.src= "moon.png";
    }}

let sections = document.querySelectorAll('body div div section');
let navlinks = document.querySelectorAll('body nav div div nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('body nav div div nav ul li a [href*=' + id + ']').classList.add('active');
            });
        }
    });
}
