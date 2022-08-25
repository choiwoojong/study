let horizontalUnderline = document.getElementById("horizontal-underline")
let horizontalMenus = document.querySelectorAll("nav:first-child a")
console.log(horizontalUnderline);
horizontalMenus.forEach((menu)=>menu. addEventListener("click", (e) => horizontalIndicator(e)));

function horizontalIndicator(e) {
  horizontalUnderline.style.left = e.currentTarget.offsetLeft + "px";
  horizontalUnderline.style.width = e.currentTarget.offsetWidth + "px";
  horizontalUnderline.style.top =  e.currentTarget.offsetTop +  e.currentTarget.offsetHeight + "px";
}