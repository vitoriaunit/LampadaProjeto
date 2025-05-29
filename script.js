const lamp = document.getElementById("lamp");
const body = document.body;

lamp.addEventListener("click", () => {
  const isOn = body.classList.toggle("light-on");

  if (isOn) {
    lamp.src = "assets/lamp_on.png";
    lamp.alt = "Lâmpada acesa";
  } else {
    lamp.src = "assets/lamp_off.png";
    lamp.alt = "Lâmpada apagada";
  }
});
