function on(clsName) {
  const element = document.querySelector(clsName);
  element.style.backgroundBlendMode = "lighten";
  element.style.backgroundPosition = "center";
}
function off(clsName) {
  const element = document.querySelector(clsName);
  element.style.backgroundBlendMode = "darken";
  element.style.backgroundPosition = "top";
}
