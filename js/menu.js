/**
 * Fixed Header Responsive
 * @version v1.0
 * @license GNU-GPL v3.0
 * @copyright 2021 J&G Proyectos Web.
 * @link del proyecto fork https://github.com/martinnillo22/fixed-header-menuresponsive
 */

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function() {
        if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")) {
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
}
